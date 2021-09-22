import { getComponentOption } from '@/global/middleware/util';
import resolveAsyncComponents from './resolve-async-components';
import middlewareHandleList from '@/global/middleware';
const runMiddleWare = async function (middlewareList, context) {
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
    try {
        for (const middleware of middlewareList) {
            if (called) {
                throw new Error(`${middleware} jumped! next is called`);
            } else if (middlewareHandleList[middleware]?.before) {
                // eslint-disable-next-line no-await-in-loop
                const out = await middlewareHandleList[middleware].before(context);
                if (out) {
                    console.warn(`${middleware} finished`, out);
                } else if (called) {
                    throw new Error(`${middleware} finished without return, next is called`);
                } else {
                    console.warn(`${middleware} finished without return, next is not called`);
                }
            } else {
                console.error(`${middleware} not exist`);
            }
        }
        if (!called) {
            // eslint-disable-next-line require-atomic-updates
            called = true;
            next();
        }
    } catch (error) {
        if (!called) {
            // eslint-disable-next-line require-atomic-updates
            called = true;
            next(false);
        }
    }
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
