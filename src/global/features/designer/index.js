import '@/global/styles/theme.css';

import Vue from 'vue';
import App from './index.vue';
import { initRouter } from './router';
import '@/global/features/page-init';
import './library';
import '@/global/styles/index.css';
import installServices from '@/global/features/service/install';
import installDataTypes from '@/global/features/dataTypes/install';
import installUtils from '@/global/features/utils/install';
import micro from './micro';

import { initMiddleware } from '@/global/middleware';
import { apolloProvider } from '@/global/features/apollo';
import installApollo from '@/global/features/apollo/queryStrCollect';
import originMetaData from '@/global/metaData';

window.appVue = Vue;
export default {
    initRouter,
    init(appConfig, platformConfig, rootRoute, metaData = originMetaData) {
        window.appInfo = Object.assign(appConfig, platformConfig);
        initMiddleware(appConfig);
        const genRouter = initRouter(appConfig, rootRoute);

        Vue.use(installServices, metaData);
        Vue.use(installDataTypes, metaData);
        Vue.use(installUtils, metaData);
        Vue.use(installApollo, metaData);

        if (window.microApp && window.microApp.isMicro) {
            micro.init(genRouter);
        } else {
            const app = new Vue({
                name: 'app',
                apolloProvider,
                router: genRouter(),
                ...App,
                // i18n: initI18n(),
            });
            app.$mount('#app');
            return app;
        }
    },
};
