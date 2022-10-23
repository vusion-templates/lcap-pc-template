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
        before: require('./mock/index.js')
    }
};
