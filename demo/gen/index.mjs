import { fileURLToPath } from 'url';
import nasl from '@lcap/nasl-core';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

import './replaceAll.mjs';
import { utils } from './utils.mjs';
import { genBundleFiles } from './genBundleFiles.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function genBundle({
    platform,
    username,
    password,
    appId,
    targetUrl,
}) {
    utils.platform = platform;
    utils.username = username;
    utils.password = password;
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
    ]).then(({ frontendName }) => {
        const frontend = app.frontends.find(({ name }) => name === frontendName);
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
    name: 'install',
    message: chalk.red('是否重新生成制品?'),
    default: false,
}).then(() => {
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
            default: 'ee5daaa6-b7ae-4095-8e6d-322e42bd36bd',
            validate,
        },
        {
            type: 'input',
            name: 'targetUrl',
            message: chalk.red('请输入制品地址:'),
            default: 'http://dev.lq0810.defaulttenant.lcap.hatest.163yun.com/',
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
}, () => { });
