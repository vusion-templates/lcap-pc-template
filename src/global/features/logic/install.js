export default {
    install(Vue, options = {}) {
        const logicsMap = Object.assign({}, options.logicsMap);
        const keys = Object.keys(logicsMap);

        Vue.prototype.$logics = {};
        keys.forEach((key) => {
            if (Vue.prototype.$logics[key]) {
                throw new Error('logics repeat:' + key);
            }
            const logicStr = logicsMap[key];
            /* eslint-disable no-new-func */
            logicsMap[key] = new Function(logicStr)();
        });

        if (keys.length) {
            Vue.prototype.$logics = Object.assign({}, Vue.prototype.$logics, logicsMap);
        }
    },
};
