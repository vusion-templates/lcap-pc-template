import encodeUrl from '@/utils/encodeUrl';

import processService from './processService';

export default {
    install(Vue, options = {}) {
        /**
         * 流程接口注册
         */
        Vue.prototype.$process = processService;

        Vue.prototype.$destination = function (url) {
            // 修复访问路径为默认首页 / 时跳转可能失效的问题
            if (url.startsWith('http'))
                location.href = encodeUrl(url);
            else {
                this.$router.push(url);
            }
        };
    },
};
