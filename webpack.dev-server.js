const host = 'localhost';
const path = require('path');
const pkg = require('./package.json');
const platformConfig = require('./platform.config.json');

if (!platformConfig.tenant) {
    console.error('platform.config error');
    process.exit(1);
}
const onProxyReq = function (proxyReq, req, res) {
    proxyReq.removeHeader('x-forwarded-proto');
    proxyReq.removeHeader('x-forwarded-host');
    proxyReq.removeHeader('x-forwarded-port');
    proxyReq.removeHeader('x-forwarded-for');

    const cookies = {};
    let cookie = proxyReq.getHeader('cookie');
    cookie = typeof cookie === 'string' ? cookie.split('; ') : cookie;
    if (Array.isArray(cookie)) {
        cookie.forEach((item) => {
            const arr = item.split('=');
            if (arr.length === 2)
                cookies[arr[0].toLowerCase()] = arr[1].trim();
        });
    }
    cookies.authorization && proxyReq.setHeader('authorization', cookies.authorization);
    cookies.username && proxyReq.setHeader('username', cookies.username);
    proxyReq.setHeader('DomainName', pkg.name.replace(/-client$/, ''));

    // console.log(proxyReq.path, proxyReq.getHeaders());
};
module.exports = function (port) {
    const devServer = {
        host,
        port,
        progress: !process.env.SERVER_DEVELOP,
        open: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname),
        watchContentBase: false, // dev slow on Windows
        /**
         * 在一些网络硬盘中，必须要开启 poll 模式
         * 同时要把 ignored 配置好，不然会卡死
         */
        watchOptions: {
            aggregateTimeout: 200,
            poll: 1000,
            ignored: /node_modules\/(?!vue-cli-plugin-vusion\/|cloud-ui\.vusion\/|vusion_packages\/).+/,
        },
        clientLogLevel: 'info',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
                onProxyReq,
            },
            "/rest": {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
                onProxyReq,
            },
            '^/gateway/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
                onProxyReq,
            },
            '^/gw/': {
                target: `http://localhost:8080`,
                changeOrigin: true,
                autoRewrite: true,
                onProxyReq,
            },
        },
    };

    return devServer;
};
