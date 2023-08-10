const J_MAIN_TARGET = 'http://dev.lq0810.defaulttenant.lcap.hatest.163yun.com/';

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
        },
    },
};
