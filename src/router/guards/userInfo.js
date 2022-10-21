import Vue from 'vue';

export const userInfoGuard = async (to, from, next) => {
    try {
        await Vue.prototype.$auth.getUserInfo();
    } catch (err) {
        console.log(err);
    }
    next();
};
