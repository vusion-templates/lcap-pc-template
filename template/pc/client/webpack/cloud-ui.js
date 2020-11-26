const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    chain(config) {
        config.plugin('copy-cloud-ui-chunks').use(CopyWebpackPlugin, [[{
            context: 'node_modules/cloud-ui.vusion/dist-raw',
            from: 'chunk-*',
            to: 'public/js/',
        }]]);
    },
};
