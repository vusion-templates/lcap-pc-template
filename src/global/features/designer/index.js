import '@/global/styles/theme.css';

import Vue from 'vue';
import App from './index.vue';
import { initRouter } from './router';
import '@/global/features/page-init';
import './library';
import '@/global/styles/index.css';
import installServices from '@/global/features/service/install';
import installDataTypes from '@/global/features/dataTypes/install';
import installLogics from '@/global/features/logic/install';
import installUtils from '@/global/features/utils/install';

import { initMiddleware } from '@/global/middleware';
import originMetaData from '@/global/metaData';

import '@/global/features/common/utils';

window.appVue = Vue;
export default {
    initRouter,
    init(appConfig, platformConfig, rootRoute, metaData = originMetaData) {
        window.appInfo = Object.assign(appConfig, platformConfig);
        initMiddleware(appConfig);
        const genRouter = initRouter(appConfig, rootRoute);

        Vue.use(installLogics, metaData);
        Vue.use(installServices, metaData);
        Vue.use(installDataTypes, metaData);
        Vue.use(installUtils, metaData);

        const app = new Vue({
            name: 'app',
            router: genRouter(),
            ...App,
            // i18n: initI18n(),
        });
        app.$mount('#app');
        return app;
    },
};
