import { loginAuth } from './auth';
import auth from '@/global/features/router/auth';
import { getComponentOption } from '../util';
export default function (appConfig) {
    const pathNameList = window.location.pathname?.split('/')?.slice(1);
    let authPass;
    if (pathNameList.length === 0) {
        authPass = appConfig.auth;
    }
    if (pathNameList.length > 1) {
        let children = appConfig.subPage;
        let res;
        for (let i = 1; i < pathNameList.length; i++) {
            for (const item of children) {
                if (item.name === pathNameList[i]) {
                    children = item.children;
                    res = item.auth;
                }
            }
        }
        authPass = res;
    }
    if (authPass) {
        auth.init(appConfig.domainName);
    }
    return function ({ to, from, next, appConfig }) {
        // designer 和 环境直接放行认证和鉴权
        if (!(process.env.NODE_ENV === 'development' || process.env.VUE_APP_DESIGNER)) {
        // 权限验证
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
                const metaAuth = componentOptions?.meta?.auth || item.meta?.auth;
                if (metaAuth) {
                    p = p.then(() => {
                        if (called) {
                            return Promise.reject();
                        }
                        let out;
                        if (metaAuth === true) {
                            const done = () => {
                                _next();
                            };
                            return auth.init(appConfig.domainName).catch(done, done);
                        } else if (metaAuth === 'loginAuth') {
                            out = loginAuth(to, from, _next, appConfig, item);
                        } else {
                            out = metaAuth(to, from, _next, appConfig, item);
                        }
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
                    console.error('router auth error', e);
                    next('/');
                }
            });
        } else {
            next();
        }
    };
}
