const path = require('path');

module.exports = {
    configureWebpack: {
        output: {
            // 设置模块导出规范为 umd
            libraryTarget: 'umd',
            library: __microAppName__,
        },
        resolve: {
            alias: {
                'cloud-ui.vusion$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.js'),
                'cloud-ui.vusion.css$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.css'),
            },
        }
    },
    lintOnSave: false,
    css: {
        extract: true,
    },
    chainWebpack: (config) => {
        config.module.rule('fonts').use('url-loader').loader('url-loader').options({}).end();
        config.module.rule('images').use('url-loader').loader('url-loader').options({}).end();
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
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
    }
};
