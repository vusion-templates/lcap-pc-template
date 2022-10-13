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

const init = (appConfig, platformConfig, rootRoute, metaData) => {
    window.appInfo = Object.assign(appConfig, platformConfig);
    initMiddleware(appConfig);
    installFilters(Vue, filters);
    installComponents(Vue, Components);

    Vue.use(installLogics, metaData);
    Vue.use(installServices, metaData);
    Vue.use(installDataTypes, metaData);
    Vue.use(installUtils, metaData);

    const app = new Vue({
        name: 'app',
        router: initRouter(rootRoute),
        ...App,
    });
    app.$mount('#app');
    return app;
};

export {
    init,
};
