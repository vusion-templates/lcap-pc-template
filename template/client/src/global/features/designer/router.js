import router from '@/global/features/router';
import utils from '@/global/features/utils/route';

let routerInstance;
export default routerInstance;
export function initRouter(appConfig, rootRoute) {
    const routes = [
        rootRoute,
        { path: '*', beforeEnter(to, from, next) {
            if (window.microApp && window.microApp.isMicro) {
                if (!location.pathname.startsWith(window.microApp.prefix)) {
                    next();
                    return;
                }
            }
            next(notFoundRoute); // 无法匹配的链接跳转
        } },
    ];
    let notFoundRoute = appConfig.router.notFound;
    let unauthorized = appConfig.router.unauthorized;

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
