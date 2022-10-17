import Vue from 'vue';
import { installFilters, installComponents } from '@vusion/utils';

import '@/assets/css/index.css';
import '@/assets/css/theme.css';

import { filterRoutes } from '@/utils/route';
import AuthPlugin from '@/plugins/auth/install';
import DataTypesPlugin from '@/plugins/dataTypes/install';
import LogicsPlugin from '@/plugins/logic/install';
import RouterPlugin from '@/plugins/router/install';
import ServicesPlugin from '@/plugins/service/install';
import UtilsPlugin from '@/plugins/utils/install';
import filters from '@/filters';
import * as Components from '@/components';

import { userInfoGuard } from './router/guards/userInfo';
import { getAuthGuard } from './router/guards/auth';

import App from './App.vue';

import { initRouter } from './router';

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
