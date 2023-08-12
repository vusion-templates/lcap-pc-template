import { fileURLToPath } from 'url';
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

async function genBundle({
    platform,
    username,
    password,
    appId,
}) {
    naslCommon.registerCommand('naslServer:startWork', () => { });
    naslCommon.registerCommand('naslServer:nodeChange', () => { });
    // 平台认证
    await utils.getAuthorization({
        platform,
        username,
        password,
    });
    const appData = await utils.loadDetail(appId);
    const { baseVersion, versionChangedTime } = appData || {};
    const res = await utils.batchQuery({
        appId,
        baseVersion,
        versionChangedTime,
    });
    const appJson = res?.data?.result?.[0] || {};
    const app = new nasl.App(appJson);
    const naslServer = new nasl.NaslServer();
    app.naslServer = naslServer;
    await naslServer.start();
    await naslServer.openApp(app);
    await naslServer.createUiTs({});
    naslCommon.registerCommand('naslServer:endWork', () => {
        console.log(chalk.green('naslServer:endWork'));
        const frontendList = appJson?.frontends?.map(({ name }) => {
            return name;
        }) || [];
        if (appJson?.frontends.length === 1) {
            genFrontendBundle({
                app,
                frontendName: frontendList[0],
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
                genFrontendBundle({ app, frontendName });
            }, (err) => {
                console.log(err);
            });
        }
    });
}

async function genFrontendBundle({ app, frontendName }) {
    const appId = app.id;
    const frontend = app.frontends.find(({ name }) => name === frontendName);
    const appData = await utils.loadDetail(appId);
    const ideVersion = appData?.ideVersion;
    const versionData = await utils.loadVersionDetail(ideVersion);
    app.packageInfos = [];
    const scopes = ['pc', 'h5'];
    scopes.forEach((scope) => {
        app.packageInfos.push(loadPackageInfo(versionData?.dependencies, scope));
    });
    const content = genBundleFiles(app, frontend);
    fs.writeFileSync(path.join(__dirname, `../bundle.js`), content);
    const releaseInfo = await utils.getFrontendReleaseInfo({
        env: 'dev',
        appId,
    });
    const frontendInfo = releaseInfo?.find(({ name }) => name === frontendName);
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

inquirer.prompt({
    type: 'confirm',
    name: 'gen',
    message: chalk.red('是否重新生成制品?'),
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
            genBundle({
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
