const path = require('path');
const pkg = require('../../package.json');
module.exports = {
    getMicroPrefix() {
        return path.join(pkg.name, process.env.PARAM_PIPELINE_ENV || '')
    },
};