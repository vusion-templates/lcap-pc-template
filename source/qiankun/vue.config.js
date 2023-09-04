const path = require('path');
const { name } = require('./package');

module.exports = {
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
        resolve: {
            alias: {
                'cloud-ui.vusion$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.js'),
                'cloud-ui.vusion.css$': path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.css'),
            },
        }
    },
    lintOnSave: false,
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
