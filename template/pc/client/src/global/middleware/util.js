import Vue from 'vue';
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
