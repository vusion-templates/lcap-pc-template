import auth from '@/global/features/router/auth';
import { getComponentOption } from '../util';
export default function (appConfig) {
    return function ({ to, from, next, appConfig }) {
        let called = false;
        const _next = function (...args) {
            if (called) {
                return;
            }
            if (args && args.length) {
                called = true;
                next(...args);
            }
        };
        let p = Promise.resolve();
        to.matched.every((item) => {
            const componentOptions = getComponentOption(item);
            const metaLogin = componentOptions?.meta?.login || item.meta?.login;
            if (metaLogin) {
                p = p.then(() => {
                    if (called) {
                        return Promise.reject();
                    }
                    const out = auth.getUserInfo(auth.maxTimes).then((data) => {
                        _next();
                        return data;
                    }, (e) => {
                        if (appConfig.router.noLogin) {
                            appConfig.router.noLogin(_next);
                        }
                        _next(false);
                        throw e;
                    });
                    if (out && out.then) {
                        return out;
                    } else {
                        return called ? Promise.reject() : Promise.resolve();
                    }
                });
            }
            return !called;
        });
        return p.then(() => {
            if (!called) {
                called = true;
                next();
            }
        }, (e) => {
            if (!called) {
                called = true;
                console.error('router login error', e);
                next('/');
            }
        });
    };
}
