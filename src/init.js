import Vue from 'vue';
import { installOptions, installDirectives, installFilters, installComponents } from '@vusion/utils';
import * as CloudUI from 'cloud-ui.vusion';
import 'cloud-ui.vusion.css';
import VueI18n from 'vue-i18n';
import '@/assets/css/index.css';
import * as Components from '@/components';
import filters from '@/filters';
import { AuthPlugin, DataTypesPlugin, LogicsPlugin, RouterPlugin, ServicesPlugin, UtilsPlugin } from '@/plugins';
import { userInfoGuard, getAuthGuard, getTitleGuard, initRouter } from '@/router';
import { filterRoutes } from '@/utils/route';
import App from './App.vue';

window.appVue = Vue;
window.Vue = Vue;
window.CloudUI = CloudUI;

Vue.use(VueI18n);
Vue.i18n = new VueI18n({
    locale: localStorage.i18nLocale || 'zh-CN',
});

// 预览沙箱不需要调用init来初始化，但是需要使用到CloudUI和Vant组件，所以放在外边
installOptions(Vue);
installDirectives(Vue, CloudUI.directives);
installComponents(Vue, CloudUI);
Vue.mixin(CloudUI.MEmitter);
Vue.mixin(CloudUI.MPubSub);

// 需要兼容老应用的制品，因此新版本入口函数参数不做改变
const init = (appConfig, platformConfig, routes, metaData) => {
    if (window.ICESTARK?.root) {
        if (!document.head.contains(document.currentScript)
            || document.currentScript.active === false)
            return;
    }

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
    router.beforeEach(getAuthGuard(router, routes, authResourcePaths, appConfig));
    router.beforeEach(getTitleGuard(appConfig));

    const app = new Vue({
        name: 'app',
        router,
        i18n: {
            locale: localStorage.i18nLocale || 'zh-CN',
        },
        ...App,
    });

    if (window.ICESTARK?.root) {
        const container = window.ICESTARK.root;
        container.innerHTML = '';
        app.$mount();
        container.appendChild(app.$el);
    } else
        app.$mount('#app');

    return app;
};

export default {
    init,
};
