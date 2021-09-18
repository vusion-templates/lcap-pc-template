import router from '@/global/features/router';
import utils from '@/global/features/utils/route';

let routerInstance;
export default routerInstance;
export function initRouter(appConfig, rootRoute) {
    let notFoundRoute = appConfig.router.notFound;
    let unauthorized = appConfig.router.unauthorized;
    const routes = [
        rootRoute,
        { path: '*', beforeEnter(to, from, next) {
            next(notFoundRoute); // 无法匹配的链接跳转
        } },
    ];

    if (!utils.hasRoute(rootRoute.children || [], notFoundRoute)) {
        notFoundRoute = '/';
    }

    if (!utils.hasRoute(rootRoute.children || [], unauthorized)) {
        unauthorized = '/';
    }

    Object.assign(appConfig.router, {
        notFoundRoute,
        unauthorized,
    });
    return function (base) {
        routerInstance = router(
            routes,
            base,
            appConfig,
        );
        return routerInstance;
    };
}
