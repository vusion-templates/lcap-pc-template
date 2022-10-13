import Vue from 'vue';
import auth from '@/global/auth/index';

export const loginAuth = function (to, from, next, appConfig, item) {
    const currentPath = (appConfig.router.base + (appConfig.router.rule === 'scope' ? item.path : to.path)).replace(/\/$/, '');
    const authOptions = {
        tipMessage: appConfig.router.tipMessage,
        noLogin: appConfig.router.noLogin,
        unauthorized: appConfig.router.unauthorized,
        domainName: appConfig.domainName,
    };
    return auth.getUserInfo().then(() => auth.getUserResources(authOptions.domainName).then(() => {
        if (auth.has(currentPath))
            next();
        else
            throw new Error('Unauthorized');
    }).catch((e) => {
        console.error('Auth', e);
        authOptions.tipMessage && Vue.prototype.$toast.show(authOptions.tipMessage);
        location.href = '/noAuth';
    }), () => {
        authOptions.noLogin(next);
        next(false);
    });
};

