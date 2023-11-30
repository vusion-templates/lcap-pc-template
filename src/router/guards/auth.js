import Vue from 'vue';

import { filterRoutes, parsePath } from '@/utils/route';
import { getBasePath } from '@/utils/encodeUrl';

/**
 * 是否有无权限页面
 * @param {*} routes
 */
export function findNoAuthView(routes) {
    if (Array.isArray(routes)) {
        return routes.find((route) => route?.path === `${getBasePath()}/noAuth`);
    }
}

const ROOT_PATH = '/';

const getParentPath = (path) => path === ROOT_PATH ? null : path.substring(0, path.lastIndexOf('/')) || ROOT_PATH;

/**
 * 过滤无权限页面（X2.22_0629调整），如子页面绑定了角色父页面未绑定，则子页面无法访问。
 * 更多边界情况参考用例: tests\unit\global\routes\route.spec.js
 * @param {*} resources
 */
export function filterAuthResources(resources) {
    if (!Array.isArray(resources) || !resources.length)
        return [];

    const validPaths = resources.reduce((map, item) => {
        map.set(item.resourceValue, 1);
        return map;
    }, new Map([[ROOT_PATH, 1], [getBasePath(), 1]])); // 需注意，路由起始都具备basePath（PC&H5都有不固定起始路由）

    const isValidPath = (path) => {
        let parentPath = getParentPath(path);
        while (parentPath && validPaths.has(parentPath))
            parentPath = getParentPath(parentPath);
        return !parentPath;
    };
    return resources.filter((item) => isValidPath(item.resourceValue));
}

export const getAuthGuard = (router, routes, authResourcePaths, appConfig, baseResourcePaths) => async (to, from, next) => {
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
    function concatResourcesRoutes(resources, baseRoutes) {
        return resources.concat(baseRoutes.map((route) => ({
            resourceValue: route,
            // 如果后续需要区分路由类型，这里也需要补充 resourceType
        })));
    }
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
    const noAuthView = findNoAuthView(routes);
    if (authPath) {
        if (!$auth.isInit()) {
            if (!userInfo.UserId) {
                localStorage.setItem('beforeLogin', JSON.stringify(location));
                next({ path: `${getBasePath()}/login` });
            } else {
                try {
                    const resources = await $auth.getUserResources(appConfig.domainName);
                    const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));
                    addAuthRoutes(realResources);
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
        } else if (redirectedFrom?.path !== to.path && to.path === `${getBasePath()}/notFound`) {
            if (noAuthView?.path) {
                next({ path: noAuthView.path });
            }
        }
    } else if (!$auth.isInit() && userInfo.UserId) {
        const resources = await $auth.getUserResources(appConfig.domainName);
        const realResources = filterAuthResources(concatResourcesRoutes(resources, baseResourcePaths));
        addAuthRoutes(realResources);
    }

    next();
};
