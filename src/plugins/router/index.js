import encodeUrl from '@/utils/encodeUrl';

import processService from './processService';
import { formatMicroFrontUrl, formatMicroFrontRouterPath } from './microFrontUrl';

export default {
    install(Vue, options = {}) {
        /**
         * 流程接口注册
         */
        Vue.prototype.$process = processService;

        Vue.prototype.$formatMicroFrontUrl = formatMicroFrontUrl;
        Vue.prototype.$formatMicroFrontRouterPath = formatMicroFrontRouterPath;

        Vue.prototype.$destination = function (url) {
            // 修复访问路径为默认首页 / 时跳转可能失效的问题
            if (url.startsWith('http'))
                location.href = encodeUrl(url);
            else {
                // 处理同页面锚点跳转无效的问题
                const beforeHashUrl = url.slice(0, url.indexOf('#'));
                if (url.indexOf('#') !== -1 && beforeHashUrl === location.pathname) {
                    const hash = url.slice(url.indexOf('#'))?.replace('#', '');
                    if (document.getElementById(hash)) {
                        document.getElementById(hash).scrollIntoView();
                    }
                }

                this.$router.push(url);
            }
        };
    },
};
