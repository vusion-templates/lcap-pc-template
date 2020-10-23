const spawnSync = require('child_process').spawnSync;
module.exports = {
    getCommitId() {
        const result = spawnSync('git', ['rev-parse', 'HEAD']);
        if (result.status === 0) {
            return String(result.stdout).trim();
        } else {
            console.error(String(result.stderr));
            throw new Error('get commitId error.');
        }
    },
};