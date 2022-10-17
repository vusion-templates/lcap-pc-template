import Vue from 'vue';
import { installFilters, installComponents } from '@vusion/utils';

import '@/assets/css/index.css';
import '@/assets/css/theme.css';
import DataTypesPlugin from '@/plugins/dataTypes/install';
import LogicsPlugin from '@/plugins/logic/install';
import RouterPlugin from '@/plugins/router/install';
import ServicesPlugin from '@/plugins/service/install';
import UtilsPlugin from '@/plugins/utils/install';
import filters from '@/filters';
import * as Components from '@/components';

import { initMiddleware } from './router/guards';

import App from './App.vue';

import { initRouter } from './router';

window.appVue = Vue;

const filterRoutes = (routes, ancestorPaths, compareFn) => {
    const newRoutes = [];
    if (Array.isArray(routes)) {
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            const routePath = route.path;
            if (!Array.isArray(ancestorPaths)) {
                ancestorPaths = [];
            }
            let newRoute = null;
            if (compareFn(route, ancestorPaths)) {
                newRoute = {
                    ...route,
                };
                newRoutes.push(newRoute);
            }
            const routeChildren = route.children;
            if (newRoute && Array.isArray(routeChildren) && routeChildren.length) {
                const children = filterRoutes(routeChildren, [...ancestorPaths, routePath], compareFn);
                if (Array.isArray(children) && children.length) {
                    newRoute.children = children;
                }
            }
        }
    }
    return newRoutes;
};

const init = (appConfig, platformConfig, routes, metaData) => {
    window.appInfo = Object.assign(appConfig, platformConfig);
    initMiddleware(appConfig);
    installFilters(Vue, filters);
    installComponents(Vue, Components);

    Vue.use(LogicsPlugin, metaData);
    Vue.use(RouterPlugin);
    Vue.use(ServicesPlugin, metaData);
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

    router.beforeEach((to, from, next) => {
        if (!Vue.prototype.hasLoadedAuth) {
            const toPath = to.redirectedFrom || to.path;
            const authPath = authResourcePaths.find((authResourcePath) => {
                if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {
                    return true;
                }
                return false;
            });
            if (authPath) {
                if (!Vue.prototype.logined) {
                    next({ path: '/login' });
                } else {
                    const userResourcePaths = [
                        {
                            resourceType: 'ui',
                            resourceValue: '/permission_center/addRoleUser',
                        },
                    ].map((resource) => resource.resourceValue);

                    Vue.prototype.hasLoadedAuth = true;

                    const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {
                        const routePath = route.path;
                        const completePath = [...ancestorPaths, routePath].join('/');
                        const authPath = userResourcePaths.find((userResourcePath) => userResourcePath.startsWith(completePath));
                        return authPath;
                    });
                    otherRoutes.forEach((route) => {
                        router.addRoute(route);
                    });
                    next({ path: toPath });
                }
            }
        }
        next();
    });

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
