import Vue from 'vue';

import { filterRoutes } from '@/utils/route';

export const getAuthGuard = (router, routes, authResourcePaths) => {
    return (to, from, next) => {
        if (!Vue.prototype.hasLoadedAuth) {
            const toPath = to.redirectedFrom || to.path;
            const authPath = authResourcePaths.find((authResourcePath) => {
                if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {
                    return true;
                }
                return false;
            });
            if (authPath) {
                if (!Vue.prototype.logined) {
                    next({ path: '/login' });
                } else {
                    const userResourcePaths = [
                        {
                            resourceType: 'ui',
                            resourceValue: '/permission_center/addRoleUser',
                        },
                    ].map((resource) => resource.resourceValue);

                    Vue.prototype.hasLoadedAuth = true;

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
};
