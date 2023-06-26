const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');
const pkg = require('../package.json');

const distDic = `${pkg.name}@${pkg.version}`;
execSync(`rm -rf ${distDic}`);
console.log(chalk.green(`删除文件夹 ${distDic} 成功！`));

fs.mkdirSync(`${distDic}`);
console.log(chalk.green(`新建空文件夹 ${distDic} 成功！`));

function copyFolder(sourceFolder, destinationFolder) {
    if (!fs.existsSync(sourceFolder))
        return;
    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
    }
    fs.readdirSync(sourceFolder).forEach((file) => {
        const sourceFilePath = `${sourceFolder}/${file}`;
        const destinationFilePath = `${destinationFolder}/${file}`;
        if (fs.lstatSync(sourceFilePath).isDirectory()) {
            copyFolder(sourceFilePath, destinationFilePath);
        } else {
            fs.copyFileSync(sourceFilePath, destinationFilePath);
        }
    });
}

if (fs.existsSync('public')) {
    console.log(chalk.white('public 构建结果存在。'));
} else {
    console.log(chalk.white('执行构建脚本 npm run build:designer'));
    execSync('npm run build:designer');
    console.log(chalk.green('构建结束！'));
}
copyFolder('public', `${distDic}`);
console.log(chalk.green('public 复制成功！'));
