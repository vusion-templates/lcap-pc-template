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
    pwd: root,
});
const client = path.join(root, 'client');
const server = path.join(root, 'server');
assert(fs.existsSync(path.join(client, 'package.json')), 'client 初始化失败');
assert(fs.existsSync(path.join(server, 'package.json')), 'server 初始化失败');
const clientPlatformConfig = require(path.join(client, 'platform.config.json'));
const serverPlatformConfig = require(path.join(server, 'config/platform.config.json'));
assert(Object.keys(clientPlatformConfig).length === Object.keys(serverPlatformConfig).length, 'platform.config 添加失败');

console.log('success');
