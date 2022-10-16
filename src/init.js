import Vue from 'vue';
import { installFilters, installComponents } from '@vusion/utils';

import '@/assets/css/index.css';
import '@/assets/css/theme.css';
import installLogics from '@/global/logic/install';
import installServices from '@/global/service/install';
import installDataTypes from '@/global/dataTypes/install';
import installUtils from '@/global/utils/install';
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

    Vue.use(installLogics, metaData);
    Vue.use(installServices, metaData);
    Vue.use(installDataTypes, metaData);
    Vue.use(installUtils, metaData);

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
        return baseResourcePaths.includes(completePath) || baseResourcePaths.includes(completeRedirectPath);
    });

    const router = initRouter(baseRoutes);

    router.beforeEach((to, from, next) => {
        if (!Vue.prototype.hasLoadedAuth) {
            const toPath = to.redirectedFrom || to.path;
            if (authResourcePaths.includes(toPath)) {
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
                        let completeRedirectPath = '';
                        const redirectPath = route.redirect;
                        if (redirectPath) {
                            completeRedirectPath = [...ancestorPaths, redirectPath].join('/');
                        }
                        let isAllow = false;
                        userResourcePaths.forEach((userResourcePath) => {
                            if (completeRedirectPath) {
                                isAllow = userResourcePath.startsWith(completeRedirectPath);
                            } else {
                                isAllow = userResourcePath.startsWith(completePath);
                            }
                        });
                        return isAllow;
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
