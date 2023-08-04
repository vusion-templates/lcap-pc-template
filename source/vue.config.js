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
        lintOnSave: false,
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
        },
    }
};
