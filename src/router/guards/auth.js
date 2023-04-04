import Vue from 'vue';

import { filterRoutes, parsePath } from '@/utils/route';

/**
 * 是否有无权限页面
 * @param {*} routes
 */
function findNoAuthView(routes) {
    if (Array.isArray(routes)) {
        return routes.find((route) => route?.path === '/noAuth');
    }
}

export const getAuthGuard = (router, routes, authResourcePaths, appConfig) => async (to, from, next) => {
    const userInfo = Vue.prototype.$global.userInfo || {};
    const $auth = Vue.prototype.$auth;
    const redirectedFrom = parsePath(to.redirectedFrom);
    const toPath = redirectedFrom?.path || to.path;
    const toQuery = redirectedFrom?.query || to.query;
    const authPath = authResourcePaths.find((authResourcePath) => {
        if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {
            return true;
        }
        return false;
    });

    function addAuthRoutes(resources) {
        if (Array.isArray(resources) && resources.length) {
            const userResourcePaths = (resources || []).map((resource) => resource?.resourceValue || resource?.ResourceValue);
            const otherRoutes = filterRoutes(routes, null, (route, ancestorPaths) => {
                const routePath = route.path;
                const completePath = [...ancestorPaths, routePath].join('/');
                const authPath = userResourcePaths.find((userResourcePath) => userResourcePath?.startsWith(completePath));
                return authPath;
            });
            otherRoutes.forEach((route) => {
                router.addRoute(route);
            });
        }
    }

    const noAuthView = findNoAuthView(routes);
    if (authPath) {
        if (!$auth.isInit()) {
            if (!userInfo.UserId) {
                localStorage.setItem('beforeLogin', JSON.stringify(location));
                if (window.ICESTARK?.loginFn) {
                    window.ICESTARK.loginFn();
                    return;
                } else
                    next({ path: '/login' });
            } else {
                try {
                    const resources = await $auth.getUserResources(appConfig.domainName);
                    addAuthRoutes(resources);
                    // 即使没有查到权限，也需要重新进一遍，来决定去 无权限页面 还是 404页面
                    next({
                        path: toPath,
                        query: toQuery,
                    });
                } catch (err) {
                    if (noAuthView?.path) {
                        next({ path: noAuthView.path });
                    }
                }
            }
        } else if (redirectedFrom?.path !== to.path && to.path === '/notFound') {
            if (noAuthView?.path) {
                next({ path: noAuthView.path });
            }
        }
    } else if (!$auth.isInit() && userInfo.UserId) {
        const resources = await $auth.getUserResources(appConfig.domainName);
        addAuthRoutes(resources);
    }

    next();
};
