const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const info = {
    params: '{"client":"cloud-admin-template","server":"cloud-admin-fullstack","config":"{\\"projectId\\":\\"1\\",\\"tenantId\\":\\"1\\",\\"tenant\\":\\"test\\"}","name":"test"}',
};
const params = JSON.parse(info.params);
childProcess.execSync('npm init vusion app my-app -f -c cloud-admin-template -s cloud-admin-fullstack --config ' + JSON.stringify(params.config) + ' --dir ' + __dirname + '/template', {
    stdio: 'inherit',
    pwd: __dirname,
});
const client = path.join(__dirname, './template/client');
const server = path.join(__dirname, './template/server');
assert(fs.existsSync(path.join(client, 'package.json')), 'client 初始化失败');
assert(fs.existsSync(path.join(server, 'package.json')), 'server 初始化失败');
const clientPlatformConfig = require(path.join(client, 'platform.config.json'));
const serverPlatformConfig = require(path.join(server, 'config/platform.config.json'));
assert(Object.keys(clientPlatformConfig).length === Object.keys(serverPlatformConfig).length, 'platform.config 添加失败');

console.log('success');
