const path = require('path');
const Utils = require('./util');
const vusion = require('../client/node_modules/vusion-api/out');
const { getCommitId } = require('./util/git');
const { success: logSuccess } = require('./util/log');

const config = vusion.rc.configurator.load();
config.platform = 'http://www.vusion.top';
config.access_token = process.env.PARAM_TOKEN;

const recordVersion = function (version, url) {
    if (!url) {
        console.error(`app/addAppVersion url required`);
        process.exit(1);
    }
    return vusion.ms.recordMicroVersionURL({
        appId: process.env.PARAM_APP_ID,
        version,
        url,
    }, {
        headers: {
            'x-auth-tenantId': process.env.PARAM_TenantId - 0,
            'x-auth-projectId': process.env.PARAM_ProjectId - 0,
        }
    }, '').then((data) => {
        if ((data.code + '').startsWith('2')) {
            logSuccess("添加应用版本成功");
        } else {
            console.error(data);
        }
    });
};
module.exports = function (publicPath, prefix) {
    let files = Utils.read(publicPath);
    files = files.map((file) => ({
        name: path.join(prefix, file),
        path: path.join(publicPath, file),
    }));
    vusion.ms.upload.micro(files, '').then((data) => {
        if ((data.code + '').startsWith('2')) {
            const onlineFiles = data.result.map((item) => `https://${item.bucket}.${item.endpoint}/${item.key}`);
            console.log(onlineFiles.join('\n'));
            logSuccess("上传成功");
            const version = getCommitId();
            return recordVersion(version, onlineFiles.find((i) => i.includes(version + '.js')));
        } else {
            console.error(data);
        }
    }, (e) => {
        console.log(e);
        throw e;
    });
};