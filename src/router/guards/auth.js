import Vue from 'vue';

import { filterRoutes } from '@/utils/route';

export const getAuthGuard = (router, routes, authResourcePaths) => async (to, from, next) => {
    const userInfo = Vue.prototype.$global.userInfo || {};
    const $auth = Vue.prototype.$auth;

    if (!$auth.isInit()) {
        const toPath = to.redirectedFrom || to.path;
        const authPath = authResourcePaths.find((authResourcePath) => {
            if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {
                return true;
            }
            return false;
        });
        if (authPath) {
            if (!userInfo.UserId) {
                next({ path: '/login' });
            } else {
                const resources = await $auth.getUserResources();
                const userResourcePaths = (resources || []).map((resource) => resource.resourceValue);
                const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {
                    const routePath = route.path;
                    const completePath = [...ancestorPaths, routePath].join('/');
                    const authPath = userResourcePaths.find((userResourcePath) => userResourcePath.startsWith(completePath));
                    return authPath;
                });
                otherRoutes.forEach((route) => {
                    router.addRoute(route);
                });
                next({ path: toPath });
            }
        }
    }
    next();
};
