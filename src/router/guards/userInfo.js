import Vue from 'vue';

export const userInfoGuard = async (to, from, next) => {
    try {
        await Vue.prototype.$auth.getUserInfo();
    } catch (err) {}
    next();
};
