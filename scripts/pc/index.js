const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const config = require('./config');
const info = {
    params: `{"client":"${config.client.name}","server":"${config.server.name}","config":"{\\"projectId\\":\\"1\\",\\"tenantId\\":\\"1\\",\\"tenant\\":\\"test\\"}","name":"test"}`,
};
const params = JSON.parse(info.params);
const root = path.join(__dirname, '../../template/pc');

const cmd = `npm init vusion app my-app -f -c ${config.client.name}#${config.client.version} -s ${config.server.name}#${config.server.version} --config ` + JSON.stringify(params.config) + ' --dir ' + root;
console.log(cmd);
childProcess.execSync(cmd, {
    stdio: 'inherit',
    cwd: root,
});

const client = path.join(root, 'client');
const server = path.join(root, 'server');
const serverPackagePath = path.join(server, 'package.json');
const packagePath = path.join(root, 'package.json');
assert(fs.existsSync(path.join(client, 'package.json')), 'client 初始化失败');
assert(fs.existsSync(serverPackagePath), 'server 初始化失败');
const clientPlatformConfig = require(path.join(client, 'platform.config.json'));
const serverPlatformConfig = require(path.join(server, 'config/platform.config.json'));
assert(Object.keys(clientPlatformConfig).length === Object.keys(serverPlatformConfig).length, 'platform.config 添加失败');

const rootPackage = require(packagePath);
const serverPackage = require(serverPackagePath);
serverPackage.version = rootPackage.version;
fs.writeFileSync(serverPackagePath, JSON.stringify(serverPackage, null, 2));
rootPackage.version = require('../../package.json').version;
fs.writeFileSync(packagePath, JSON.stringify(rootPackage, null, 2));

childProcess.execSync('cp ../../api.yaml ./', { stdio: 'inherit', cwd: root });
childProcess.execSync('cp ../../builtInFunctions.yaml ./', { stdio: 'inherit', cwd: root });

console.log('success');
