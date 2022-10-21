const path = require('path');
const fs = require('fs-extra');
module.exports = {
    config(baseConfig) {
        baseConfig.outputDir = (baseConfig.outputDir || 'public');
        fs.emptyDirSync(path.resolve(baseConfig.outputDir));
        fs.emptyDirSync(path.resolve('vusion_packages'));
        baseConfig.configureWebpack = {
            ...baseConfig.configureWebpack,
            output: {
                libraryExport: 'default',
            },
        };
    },
    chain(config) {
        config.externals({
            ...config.get('externals'),
            'cloud-ui.vusion': 'CloudUI',
        });
        config.resolve.alias.set('cloud-ui.vusion.css$', path.resolve(__dirname, './index.css'));
    },
};
