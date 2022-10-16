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

const traverseRoutes = (route, allowedPaths, ancestorPaths, newRoutes) => {
    const routePath = route.path;
    if (!Array.isArray(ancestorPaths)) {
        ancestorPaths = [];
    }
    const completePath = [...ancestorPaths, routePath].join('/');

    let completeRedirectPath = '';
    const redirectPath = route.redirect;
    if (redirectPath) {
        completeRedirectPath = [...ancestorPaths, redirectPath].join('/');
    }
    let newRoute = null;
    if (allowedPaths.includes(completePath) || allowedPaths.includes(redirectPath)) {
        newRoute = {
            ...route,
        };
        newRoutes.push(newRoute);
    }
    const routeChildren = route.children;
    if (newRoute && Array.isArray(routeChildren) && routeChildren.length) {
        newRoute.children = [];
        for (let i = 0; i < routeChildren.length; i++) {
            const subView = routeChildren[i];
            traverseRoutes(subView, allowedPaths, [...ancestorPaths, routePath], newRoute.children);
        }
    }
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

    const baseResourcePaths = platformConfig.baseResourcePaths || [];

    const baseRoutes = [];
    if (Array.isArray(routes)) {
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            traverseRoutes(route, baseResourcePaths, null, baseRoutes);
        }
    }

    const app = new Vue({
        name: 'app',
        router: initRouter(baseRoutes),
        ...App,
    });
    app.$mount('#app');
    return app;
};

export {
    init,
};
