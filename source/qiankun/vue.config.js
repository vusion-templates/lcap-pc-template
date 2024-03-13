const path = require('path');
const { name } = require('./package');

module.exports = {
    configureWebpack(config) {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;

        config.resolve.alias['cloud-ui.vusion$'] = path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.js');
        config.resolve.alias['cloud-ui.vusion.css$'] = path.resolve(__dirname, 'node_modules/cloud-ui.vusion/dist-theme/index.css');

        if (process.env.NODE_ENV === 'production') {
            config.devtool = false;
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
