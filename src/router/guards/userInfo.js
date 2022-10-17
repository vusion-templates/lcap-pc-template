import Vue from 'vue';

export const userInfoGuard = function (to, from, next) {
    Vue.prototype.$auth.getUserInfo();
    next();
};
