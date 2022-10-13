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

import './library';
import originMetaData from './metaData.json';
import appConfig from './app.config';
import platformConfig from './platform.config.json';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

window.appInfo = Object.assign(appConfig, platformConfig);

initMiddleware(appConfig);
installFilters(Vue, filters);
installComponents(Vue, Components);

Vue.use(installLogics, originMetaData);
Vue.use(installServices, originMetaData);
Vue.use(installDataTypes, originMetaData);
Vue.use(installUtils, originMetaData);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
