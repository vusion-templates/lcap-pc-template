import Vue from 'vue';

export const userInfoGuard = async (to, from, next) => {
    await Vue.prototype.$auth.getUserInfo();
    next();
};
