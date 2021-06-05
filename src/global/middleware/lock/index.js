import { getComponentOption } from '../util';
export default function (appConfig) {
    return function ({ to, from, next, appConfig }) {
        const matched = to.matched || [];
        const locks = [];
        matched.forEach((item) => {
            const componentOptions = getComponentOption(item);
            const metaLocks = componentOptions?.meta?.locks || item.meta?.locks;
            if (metaLocks) {
                metaLocks.forEach((lock) => {
                    if (lock.params && lock.params.length) {
                        locks.push(lock);
                    }
                });
            }
        });
        if (!locks.length) {
            next();
            return Promise.resolve();
        }
        const includePath = function (path) {
            if (typeof path === 'string') {
                return path === to.name || path === to.path;
            }
            if (path instanceof RegExp) {
                return path.test(to.name) || path.test(to.path);
            }
            return false;
        };

        const fromQuery = from.query;
        const toQuery = to.query;
        let isChanged = false;
        locks.forEach((lock) => {
        // 没有 include 时全通过，当前 to.path 必须是匹配收集到的每个 lock 的
            if (lock.include && !lock.include.some(includePath))
                return;
            if (lock.exclude && lock.exclude.some(includePath))
                return;

            lock.params.forEach((param) => {
                if (!(param in toQuery) && fromQuery[param]) {
                    isChanged = true;
                    toQuery[param] = fromQuery[param];
                }
                if (toQuery[param] === '') {
                    toQuery[param] = undefined;
                } // 美化路由
            });
        });
        if (isChanged) {
            next({
                path: to.path,
                query: toQuery,
            });
            return Promise.reject();
        } else {
            next();
            return Promise.resolve();
        }
    };
}
