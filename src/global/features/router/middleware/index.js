import { getComponentOption } from '@/global/middleware/util';
import resolveAsyncComponents from './resolve-async-components';
import middlewareHandleList from '@/global/middleware';
const runMiddleWare = function (middlewareList, context) {
    let p = Promise.resolve();
    let called = false;
    const next = context.next;
    context.next = function (...args) {
        if (called) {
            return;
        }
        if (args && args.length) {
            called = true;
            next(...args);
        }
    };
    while (middlewareList.length) {
        const middleware = middlewareList.shift();
        p = p.then(() => {
            if (called) {
                return Promise.reject();
            } else if (middlewareHandleList[middleware]?.before) {
                const out = middlewareHandleList[middleware].before(context);
                if (out && out.then) {
                    return out;
                } else {
                    return called ? Promise.reject() : Promise.resolve();
                }
            } else {
                console.error(`${middleware} not exist`);
                return Promise.resolve();
            }
        }, (e) => {
            console.error(`${middleware} run error`, e);
            middlewareList = [];
            if (!called) {
                called = true;
            }
            return Promise.reject();
        });
    }
    p.then(() => {
        if (!called) {
            called = true;
            next();
        }
    }, (e) => {
        console.log(e);
        if (!called) {
            called = true;
            next(false);
        }
    });
};
export const beforeMiddleware = function (router, appConfig) {
    // 提前加载异步组件
    router.beforeEach((to, from, next) => {
        resolveAsyncComponents(to.matched)(to, from, next);
    });
    // 中间件
    router.beforeEach((to, from, next) => {
        let middlewareList = [...(appConfig?.router?.middleware || [])];
        if (!middlewareList.includes('first')) {
            middlewareList.push('first');
        }
        to.matched.forEach((routerItem) => {
            const componentOptions = getComponentOption(routerItem);
            if (componentOptions) {
                if (componentOptions?.middleware?.length) {
                    middlewareList = [...componentOptions.middleware];
                }
            }
        });
        if (middlewareList.length) {
            const context = {
                to,
                from,
                next,
                appConfig,
            };
            runMiddleWare(middlewareList, context);
        } else {
            next();
        }
    });
};

export const afterMiddleware = function (router, appConfig) {
    router.afterEach((to, from, next) => {
        let middlewareList = [...(appConfig.router?.effect || [])];
        to.matched.forEach((routerItem) => {
            const componentOptions = getComponentOption(routerItem);
            if (componentOptions?.routerEffect?.length) {
                middlewareList = [...componentOptions.routerEffect];
            }
        });
        const context = {
            to,
            from,
            appConfig,
        };
        middlewareList.forEach((middleware) => {
            if (middlewareHandleList[middleware]?.after) {
                middlewareHandleList[middleware].after(context);
            } else {
                console.error(`${middleware} not exist`);
            }
        });
    });
};
