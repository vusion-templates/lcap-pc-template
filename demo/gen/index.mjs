import { fileURLToPath } from 'url';
import axios from 'axios';
import nasl from '@lcap/nasl';
import naslCommon from '@lcap/nasl/out/common/index.js';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

import './replaceAll.mjs';
import { utils } from './utils.mjs';
import { genBundleFiles } from './genBundleFiles.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appConfigPath = path.join(__dirname, './app.config.jsonc');

function loadPackageInfo(dependencies, scope) {
    const dependencyMap = dependencies;
    const packageInfo = {
        template: { name: '', version: '', scope },
        ui: { name: '', version: '', scope },
        scope,
    };
    packageInfo.template.name = scope === 'h5' ? '@lcap/mobile-template' : 'lcap-pc-template';
    packageInfo.template.version = scope === 'h5' ? dependencyMap.FrontendArchH5.version : dependencyMap.FrontendArchPC.version;
    packageInfo.ui.name = scope === 'h5' ? '@lcap/mobile-ui' : 'cloud-ui.vusion';
    packageInfo.ui.version = scope === 'h5' ? dependencyMap.FrontendComponentLibraryH5.version : dependencyMap.FrontendComponentLibraryPC.version;
    return packageInfo;
}

const validate = (input) => {
    if (input.trim().length === 0) {
        return '不能为空';
    }
    return true;
};

/**
 * 一些前置的应用信息获取
 * @param {*} param0
 */
async function preGenBundle({
    platform,
    username,
    password,
    appId,
}) {
    // 平台认证
    await utils.getAuthorization({
        platform,
        username,
        password,
    });
    console.log(chalk.green('正在获取应用信息...'));
    const appData = await utils.loadDetail(appId);
    const envData = await utils.getEnv();
    const { baseVersion, versionChangedTime } = appData || {};
    const res = await utils.batchQuery({
        appId,
        baseVersion,
        versionChangedTime,
    });
    const appJson = res?.data?.result?.[0] || {};
    const app = new nasl.App(appJson);
    const versionData = await utils.loadVersionDetail(appData?.ideVersion);
    app.packageInfos = [];
    const scopes = ['pc', 'h5'];
    scopes.forEach((scope) => {
        app.packageInfos.push(loadPackageInfo(versionData?.dependencies, scope));
    });
    const config = {
        appData,
        envData,
        versionData,
    };
    const frontendList = appJson?.frontends?.map(({ name }) => {
        return name;
    }) || [];
    if (appJson?.frontends.length === 1) {
        genBundle({
            app,
            frontend: appJson?.frontends[0],
            config,
        });
    } else {
        inquirer.prompt([
            {
                type: 'list',
                name: 'frontendName',
                message: chalk.green('当前应用是：') + chalk.red(`${app.name}（${app.title}）`) + chalk.green('，请选择想要生成的') + chalk.red('端') + chalk.green('：'),
                choices: frontendList,
            },
        ]).then(({ frontendName }) => {
            const frontend = app.frontends.find(({ name }) => name === frontendName);
            genBundle({
                app,
                frontend,
                config,
            });
        }, (err) => {
            console.log(err);
        });
    }
}

export const kebab2Camel = (name) => name.replace(/(?:^|-)([a-zA-Z0-9])/g, (m, $1) => $1.toUpperCase());

/**
 * 生成bundle
 * @param {*} param0
 */
async function genBundle({ app, frontend, config }) {
    naslCommon.registerCommand('naslServer:startWork', () => {
        console.log(chalk.green('正在进行标注...'));
    });
    naslCommon.registerCommand('naslServer:nodeChange', () => { });
    naslCommon.registerCommand('naslServer:endWork', () => {
        console.log(chalk.green('标注完成！'));
        genFrontendBundle({ app, frontend, config });
    });
    const basicAPI = await getBasicApi({ frontend, config });
    const naslServer = new nasl.NaslServer();
    app.naslServer = naslServer;
    await naslServer.start();
    await naslServer?.openApp(app);
    await naslServer?.createUiTs({
        ...basicAPI,
    });
}

/**
 * 获取基础API
 * @param {*} param0
 * @returns
 */
async function getBasicApi({ frontend, config }) {
    console.log(chalk.green('正在获取基础组件API...'));
    const { envData, versionData } = config || {};
    const frontendComponentLibraryMap = {
        pc: {
            type: 'FrontendComponentLibraryPC',
            name: 'cloud-ui.vusion',
        },
        h5: {
            type: 'FrontendComponentLibraryH5',
            name: '@lcap/mobile-ui',
        },
    };
    const frontendComponentLibrary = frontendComponentLibraryMap[frontend?.type];
    const frontendComponentLibraryInfo = versionData?.dependencies?.[frontendComponentLibrary?.type];
    const basicRes = await axios.create({
        baseURL: `http:${envData?.STATIC_URL}`,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
    }).get(`/packages/${frontendComponentLibrary.name}@${frontendComponentLibraryInfo.version}/dist-theme/usage.json?t=${Date.now()}`);
    const basicAPI = {};
    // eslint-disable-next-line chai-friendly/no-unused-expressions
    basicRes?.data?.forEach(({ symbol, jsonSchema }) => {
        const { children } = jsonSchema;
        basicAPI[symbol] = jsonSchema;
        Object.assign(basicAPI[symbol], {
            componentLevel: 'root',
        });
        if (Array.isArray(children)) {
            children.forEach((child) => {
                const newItem = {
                    ...child,
                };
                newItem.tagName = newItem.name.replace(/^.+?\//, '').replace(/\.vue$/, '');
                newItem.componentName = kebab2Camel(newItem.tagName);
                basicAPI[newItem.name] = newItem;
            });
        }
    });
    return basicAPI;
}

/**
 * 根据端生成bundle文件
 * @param {*} param0
 */
async function genFrontendBundle({ app, frontend, config }) {
    const { appData, envData } = config || {};
    const content = genBundleFiles(app, frontend, {
        STATIC_URL: envData?.STATIC_URL,
    });
    fs.writeFileSync(path.join(__dirname, `../bundle.js`), content);
    const appId = app.id;
    const releaseInfo = await utils.getFrontendReleaseInfo({
        env: 'dev',
        appId,
    });
    const frontendInfo = releaseInfo?.find?.(({ name }) => name === frontend.name);
    const { domain } = frontendInfo || {};
    if (!domain) {
        console.log(chalk.red('未找到对应的域名，请检查是否已经发布!'));
        process.exit();
    }
    fs.writeJSONSync(path.join(__dirname, `../platform.json`), {
        platform: domain,
    }, { spaces: 4 });
    console.log(chalk.red('文件生成成功！！！'));
    console.log(chalk.green(`开发环境域名：${domain}`));
    const webService = appData?.services?.find((service) => service.type !== 'microService') || {};
    const { devUserAccount, devUserAccountPwd } = webService || {};
    console.log(chalk.green(`用户名：${devUserAccount}`));
    console.log(chalk.green(`密码：${devUserAccountPwd}`));
    process.exit();
}

/**
 * 应用信息询问
 */
function init() {
    inquirer.prompt({
        type: 'confirm',
        name: 'gen',
        message: chalk.green('是否重新生成制品？') + chalk.red('（默认不重新生成）'),
        default: false,
    }).then(({ gen }) => {
        if (gen) {
            if (!fs.pathExistsSync(appConfigPath)) {
                fs.writeJSONSync(appConfigPath, {
                    platform: 'http://defaulttenant.lcap.ha.test.com/',
                    username: 'admin',
                    password: 'Admin@123456',
                }, { spaces: 4 });
            }
            const appConfig = fs.readJSONSync(appConfigPath);
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'platform',
                    message: chalk.green('请输入平台地址:'),
                    default: appConfig.platform,
                    validate,
                },
                {
                    type: 'input',
                    name: 'username',
                    message: chalk.green('请输入账号:'),
                    default: appConfig.username,
                    validate,
                },
                {
                    type: 'input',
                    name: 'password',
                    message: chalk.green('请输入密码:'),
                    default: appConfig.password,
                    validate,
                },
                {
                    type: 'input',
                    name: 'appId',
                    message: chalk.red('请输入应用id:'),
                    default: appConfig.appId ?? null,
                    validate,
                },
            ]).then(({ platform, username, password, appId }) => {
                fs.writeJSONSync(appConfigPath, Object.assign(appConfig, {
                    platform,
                    username,
                    password,
                    appId,
                }), { spaces: 4 });
                preGenBundle({
                    platform,
                    username,
                    password,
                    appId,
                });
            }, (err) => {
                console.log(err);
                process.exit();
            });
        }
    }, (err) => {
        console.log(err);
        process.exit();
    });
}

init();
