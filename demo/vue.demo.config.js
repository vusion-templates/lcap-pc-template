const platformJson = require('./platform.json');

const J_MAIN_TARGET = platformJson.platform;

module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/api': {
                target: J_MAIN_TARGET,
                changeOrigin: true,
                autoRewrite: true,
            },
            '/rest': {
                target: J_MAIN_TARGET,
                changeOrigin: true,
                autoRewrite: true,
            },
            '^/gateway/': {
                target: J_MAIN_TARGET,
                changeOrigin: true,
                autoRewrite: true,
            },
            '^/gw/': {
                target: J_MAIN_TARGET,
                changeOrigin: true,
                autoRewrite: true,
            },
            '^/upload/': {
                target: J_MAIN_TARGET,
                changeOrigin: true,
                autoRewrite: true,
            },
        },
    },
};
