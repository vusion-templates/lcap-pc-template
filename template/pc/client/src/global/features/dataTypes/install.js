import enums from '../../enums';

export default {
    install(Vue, options = {}) {
        Vue.prototype.$global = {
            userInfo: {},
        };

        Vue.prototype.$enums = (key, value) => {
            if (!key || !value)
                return '';
            if (enums[key]) {
                return enums[key](value);
            } else {
                return '';
            }
        };
    },
};
