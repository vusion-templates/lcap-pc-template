import Vue from 'vue';

import { filterRoutes, parsePath, getFatherPath } from '@/utils/route';
import { getBasePath } from '@/utils/encodeUrl';

const ROOT_PATH = '/';

/**
 * 是否有无权限页面
 * @param {*} routes
 */
function findNoAuthView(routes) {
    if (Array.isArray(routes)) {
        return routes.find((route) => route?.path === `${getBasePath()}/noAuth`);
    }
}

const checkPath = (path, map) => {
    if (
        path === ROOT_PATH
        || (map[path] && checkPath(getFatherPath(path), map))
    )
        return true;
    else
        return false;
};

export const filterAuthResources = (resources) => {
    const res = [];
    if (!(Array.isArray(resources) && resources.length)) {
        return res;
    }

    const map = resources.reduce(
        (acc, cur) => {
            acc[cur.resourceValue] = true;
            return acc;
        },
        { [ROOT_PATH]: true, '': true },
    ); // 初始两个默认key，为覆盖边缘情况

    resources.forEach((item) => {
        const fPath = getFatherPath(item.resourceValue);
        if (fPath === ROOT_PATH || checkPath(fPath, map)) {
            res.push(item);
        }
    });
    return res;
};

export const getAuthGuard = (
    router,
    routes,
    authResourcePaths,
    appConfig,
) => async (to, from, next) => {
    const userInfo = Vue.prototype.$global.userInfo || {};
    const $auth = Vue.prototype.$auth;
    const redirectedFrom = parsePath(to.redirectedFrom);
    const toPath = redirectedFrom?.path || to.path;
    const toQuery = to.query;
    const authPath = authResourcePaths.find((authResourcePath) => {
        if (authResourcePath === toPath || `${authResourcePath}/` === toPath) {
            return true;
        }
        return false;
    });

    function addAuthRoutes(resources) {
        if (Array.isArray(resources) && resources.length) {
            const userResourcePaths = (resources || []).map(
                (resource) => resource?.resourceValue || resource?.ResourceValue,
            );
            const otherRoutes = filterRoutes(
                routes,
                null,
                (route, ancestorPaths) => {
                    const routePath = route.path;
                    const completePath = [...ancestorPaths, routePath].join(
                        '/',
                    );
                    const authPath = userResourcePaths.find((userResourcePath) =>
                        userResourcePath?.startsWith(completePath));
                    return authPath;
                },
            );
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
                    next({ path: `${getBasePath()}/login` });
            } else {
                try {
                    const resources = await $auth.getUserResources(
                        appConfig.domainName,
                    );
                    addAuthRoutes(filterAuthResources(resources));
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
        } else if (
            redirectedFrom?.path !== to.path
            && to.path === `${getBasePath()}/notFound`
        ) {
            if (noAuthView?.path) {
                next({ path: noAuthView.path });
            }
        }
    } else if (!$auth.isInit() && userInfo.UserId) {
        const resources = await $auth.getUserResources(appConfig.domainName);
        addAuthRoutes(filterAuthResources(resources));
    }

    next();
};
