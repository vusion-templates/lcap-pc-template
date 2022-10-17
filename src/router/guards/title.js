import Vue from 'vue';
import isFunction from 'lodash/isFunction';

export const getComponentOption = function (routerItem) {
    if (routerItem.components.default) {
        const ctor = routerItem.components.default._Ctor;
        let componentOptions;
        if (ctor && ctor[0]) {
            componentOptions = ctor[0].options;
        } else {
            componentOptions = Vue.extend(routerItem.components.default).options;
        }
        return componentOptions;
    }
};

export const getTitleGuard = (appConfig) => (to, from, next) => {
    const metaTitle = to.matched.concat().reverse().map((item) => {
        const componentOptions = getComponentOption(item);
        return componentOptions?.meta?.title || item.path.slice(1) || item.meta?.title;
    }).filter((i) => i)[0];
    if (metaTitle) {
        if (isFunction(metaTitle)) {
            document.title = metaTitle(to, from);
        } else {
            if (appConfig.documentTitle) {
                document.title = appConfig.documentTitle.replaceAll('$页面标题', metaTitle).replaceAll('$应用名称', appConfig.project);
            } else {
                document.title = `${metaTitle}-${appConfig.project}`;
            }
        }
    }
    next();
};
