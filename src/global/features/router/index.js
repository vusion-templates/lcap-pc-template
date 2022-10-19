import Vue from 'vue';
import VueRouter from 'vue-router';

import routerLock from '@/global/features/router/lock';
import encodeUrl from '@/global/features/utils/encodeUrl';

import AuthPlugin from './auth/vue';
import processService from './processService';
import { beforeMiddleware, afterMiddleware } from './middleware';

Vue.use(VueRouter);
window.Vue = Vue;
window.VueRouter = VueRouter;

/**
 * 流程接口注册
 */
Vue.prototype.$process = processService;

Vue.prototype.$destination = function (url) {
    // 修复访问路径为默认首页 / 时跳转可能失效的问题
    if (url.startsWith('http') || location.pathname === '/')
        location.href = encodeUrl(url);
    else {
        if (url[0] !== '/')
            this.$router.push(url);
        else {
            const oldPath = location.pathname.split('/');
            if (url.startsWith('/' + (oldPath[1] || '') + '/'))
                this.$router.push(url.replace('/' + (oldPath[1] || ''), ''));
            else
                location.href = encodeUrl(url);
        }
    }
};

export default function (routes, base, appConfig) {
    base = base || appConfig?.router.base;

    if (appConfig.auth) {
        routes[0].meta = routes[0].meta || {};
        routes[0].meta.auth = 'loginAuth';
    }
    const router = new VueRouter({
        routes,
        base,
        mode: appConfig.router.mode || 'history',
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return {
                    selector: to.hash,
                };
            }
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 };
            }
        },
    });
    beforeMiddleware(router, appConfig);
    Vue.use(routerLock);
    Vue.use(AuthPlugin, {
        base,
        router,
        autoHide: true,
    });
    afterMiddleware(router, appConfig);

    return router;
}
