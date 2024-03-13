// 修改该文件时，需要同步修改 source/icestark/vue.config.js 和 source/qiankun/vue.config.js
const path = require('path');

module.exports = {
    configureWebpack(config) {
        config.resolve.alias['cloud-ui.vusion$'] = path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.js');
        config.resolve.alias['cloud-ui.vusion.css$'] = path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.css');

        if (process.env.NODE_ENV === 'production') {
            config.devtool = false;
        }
    },
    lintOnSave: false,
    devServer: {
        port: 8810,
        proxy: {
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
            '^/upload': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                autoRewrite: true,
            },
        },
    },
};
