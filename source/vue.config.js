const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'cloud-ui.vusion$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-raw/index.js'),
                'cloud-ui.vusion.css$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-raw/index.css'),
            },
        }
    },
    devServer: {
        port: 8810,
        proxy: {
            '/system': {
                target: 'http://localhost:8080', // 后端服务的 ip 或者域名
                changeOrigin: true,
                autoRewrite: true,
            },
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
            },
            '/rest': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
            },
            '^/gateway/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
            },
            '^/gw/': {
                target: `http://localhost:8080`,
                changeOrigin: true,
                autoRewrite: true,
            },
        },
    }
};
