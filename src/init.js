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
const fnList = ['preRequest', 'postRequest', 'beforeRouter', 'afterRouter'];
const evalWrap = function (metaData, fnName) {
    // eslint-disable-next-line no-eval
    metaData && fnName && metaData?.frontendEvents[fnName] && eval(metaData.frontendEvents[fnName]);
};
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
    console.log('appConfig: ', appConfig);
    console.log('platformConfig: ', platformConfig);
    console.log('routes: ', routes);
    console.log('metaData: ', metaData);
    // 应用初始化之前 不能访问应用中的任何逻辑
    evalWrap.bind(window)(metaData, 'rendered');

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

    // 全局catch error，主要来处理中止组件,的错误不想暴露给用户，其余的还是在控制台提示出来
    Vue.config.errorHandler = (err, vm, info) => {
        if (err.name === 'Error' && err.message === '程序中止') {
            console.warn('程序中止');
        } else {
            // err，错误对象
            // vm，发生错误的组件实例
            // info，Vue特定的错误信息，例如错误发生的生命周期、错误发生的事件
            console.error(err);
        }
    };
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
    const hasBeforeRouter = !!metaData?.frontendEvents?.beforeRouter;
    const hasAfterRouter = !!metaData?.frontendEvents?.afterRouter;
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

    if (metaData && metaData.frontendEvents) {
        for (let index = 0; index < fnList.length; index++) {
            const fnName = fnList[index];
            if (fnName && metaData.frontendEvents[fnName]) {
                // eval(metaData.frontendEvents[fnName]);
                evalWrap.bind(app)(metaData, fnName);
                console.log(fnName, window[fnName]);
                Vue.prototype[fnName] = window[fnName];
            }
        }
    }
    const beforeRouter = Vue.prototype.beforeRouter;
    const afterRouter = Vue.prototype.afterRouter;
    beforeRouter && router.beforeEach((route) => {
        beforeRouter && beforeRouter(route);
    });
    // -----------------mock
    // const fnName = 'afterRouter';
    // metaData.frontendEvents = {
    //     afterRouter: "window.afterRouter = async (event) => { \nawait (async () => {\n\nawait (this.$logics['app.logics.logic7']({\n                config: {\n                    download: false,\n                },\n                query: {},\n                headers: {},\n            path: {},\n                body: {\n}\n}))\nreturn;\n})();\n}\n",
    // };
    // evalWrap.bind(app)(metaData, fnName);
    // Vue.prototype[fnName] = window[fnName];
    // -----------------mock

    // const afterRouterWrap = function (route) {
    //     console.log('触发了 afterEach:22 ', this, window.$logics);
    //     afterRouter && afterRouter.bind(app)(route);
    // };
    // const fn = afterRouterWrap.bind(app);
    // afterRouter && router.afterEach(fn);
    afterRouter && router.afterEach((route) => {
        afterRouter && afterRouter(route);
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
