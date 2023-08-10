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
}) {
    const res = await utils.batchQuery({
        platform,
        username,
        password,
        appId,
    });
    const appJson = res?.data?.result?.[0];
    const frontendList = appJson.frontends.map(({ name }) => {
        return name;
    });
    const app = new nasl.App(appJson);
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
        const bundlePath = path.join(__dirname, `../bundle.js`);
        fs.writeFile(bundlePath, content);
        console.log('bundle文件生成成功');
    }, (err) => {
        console.log(err);
    });
}

inquirer.prompt([
    {
        type: 'input',
        name: 'platform',
        message: chalk.green('请输入平台地址:'),
        default: 'http://defaulttenant.lcap.ha.test.com/',
    },
    {
        type: 'input',
        name: 'username',
        message: chalk.green('请输入账号:'),
        default: 'admin',
    },
    {
        type: 'input',
        name: 'password',
        message: chalk.green('请输入密码:'),
        default: 'Admin@123456',
    },
    {
        type: 'input',
        name: 'appId',
        message: chalk.red('请输入应用id:'),
    },
]).then(({ platform, username, password, appId }) => {
    if (!appId) {
        console.log('应用id不能为空');
        return;
    }
    genBundle({
        platform,
        username,
        password,
        appId,
    });
}, (err) => {
    console.log(err);
});
