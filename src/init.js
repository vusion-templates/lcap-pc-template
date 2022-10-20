import Vue from 'vue';
import { installFilters, installComponents } from '@vusion/utils';

import '@/assets/css/index.css';
import * as Components from '@/components';
import filters from '@/filters';
import { AuthPlugin, DataTypesPlugin, LogicsPlugin, RouterPlugin, ServicesPlugin, UtilsPlugin } from '@/plugins';
import { userInfoGuard, getAuthGuard, getTitleGuard, initRouter } from '@/router';
import { filterRoutes } from '@/utils/route';
import App from './App.vue';

window.appVue = Vue;

const init = (appConfig, platformConfig, routes, metaData) => {
    window.appInfo = Object.assign(appConfig, platformConfig);

    installFilters(Vue, filters);
    installComponents(Vue, Components);

    Vue.use(LogicsPlugin, metaData);
    Vue.use(RouterPlugin);
    Vue.use(ServicesPlugin, metaData);
    Vue.use(AuthPlugin);
    Vue.use(DataTypesPlugin, metaData);
    Vue.use(UtilsPlugin, metaData);

    // 已经获取过权限接口
    Vue.prototype.hasLoadedAuth = false;

    // 是否已经登录
    Vue.prototype.logined = true;
    const baseResourcePaths = platformConfig.baseResourcePaths || [];
    const authResourcePaths = platformConfig.authResourcePaths || [];
    const baseRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {
        const routePath = route.path;
        const completePath = [...ancestorPaths, routePath].join('/');
        let completeRedirectPath = '';
        const redirectPath = route.redirect;
        if (redirectPath) {
            completeRedirectPath = [...ancestorPaths, redirectPath].join('/');
        }
        return baseResourcePaths.includes(completePath) || completeRedirectPath;
    });

    const router = initRouter(baseRoutes);

    router.beforeEach(userInfoGuard);
    router.beforeEach(getAuthGuard(router, routes, authResourcePaths));
    router.beforeEach(getTitleGuard(appConfig));

    const app = new Vue({
        name: 'app',
        router,
        ...App,
    });
    app.$mount('#app');
    return app;
};

export {
    init,
};
