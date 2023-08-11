import { fileURLToPath } from 'url';
import nasl from '@lcap/nasl';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

import './replaceAll.mjs';
import { utils } from './utils.mjs';
import { genBundleFiles } from './genBundleFiles.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function genBundle({
    platform,
    username,
    password,
    appId,
    targetUrl,
}) {
    // 平台认证
    await utils.getAuthorization({
        platform,
        username,
        password,
    });
    const res = await utils.batchQuery(appId);
    const appJson = res?.data?.result?.[0];
    const app = new nasl.App(appJson);
    const naslServer = new nasl.NaslServer();
    app.naslServer = naslServer;
    await naslServer.start();
    await naslServer.openApp(app);
    await naslServer.createUiTs({});
    const frontendList = appJson.frontends.map(({ name }) => {
        return name;
    });
    inquirer.prompt([
        {
            type: 'list',
            name: 'frontendName',
            message: chalk.red(`当前应用是：${app.name}（${app.title}），请选择想要生成的端:`),
            choices: frontendList,
        },
    ]).then(async ({ frontendName }) => {
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
        fs.writeJSONSync(path.join(__dirname, `../platform.json`), {
            platform: targetUrl,
        });
        console.log('文件生成成功!');
        process.exit();
    }, (err) => {
        console.log(err);
    });
}

const validate = (input) => {
    if (input.trim().length === 0) {
        return '不能为空';
    }
    return true;
};

inquirer.prompt({
    type: 'confirm',
    name: 'gen',
    message: chalk.red('是否重新生成制品?'),
    default: false,
}).then(({ gen }) => {
    if (gen) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'platform',
                message: chalk.green('请输入平台地址:'),
                default: 'http://defaulttenant.lcap.ha.test.com/',
                validate,
            },
            {
                type: 'input',
                name: 'username',
                message: chalk.green('请输入账号:'),
                default: 'admin',
                validate,
            },
            {
                type: 'input',
                name: 'password',
                message: chalk.green('请输入密码:'),
                default: 'Admin@123456',
                validate,
            },
            {
                type: 'input',
                name: 'appId',
                message: chalk.red('请输入应用id:'),
                default: '38f03440-b567-4b78-bff9-ed88f86e63fa',
                validate,
            },
            {
                type: 'input',
                name: 'targetUrl',
                message: chalk.red('请输入制品地址:'),
                default: 'http://dev.xbtest.defaulttenant.lcap.hatest.163yun.com/',
                validate,
            },
        ]).then(({ platform, username, password, appId, targetUrl }) => {
            genBundle({
                platform,
                username,
                password,
                appId,
                targetUrl,
            });
        }, (err) => {
            console.log(err);
        });
    }
}, (err) => {
    console.log(err);
});
