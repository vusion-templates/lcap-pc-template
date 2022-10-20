import Vue from 'vue';
import auth from '@/apis/auth';
import lowauth from '@/apis/lowauth';
import cookie from '@/utils/cookie';

const getBaseHeaders = () => ({
    Authorization: cookie.get('authorization'),
    Env: window.appInfo && window.appInfo.env,
});

let userInfoPromise = null;
let userResourcesPromise = null;

export default {
    _map: undefined,
    getUserInfo() {
        if (!userInfoPromise) {
            if (window.appInfo.hasUserCenter) {
                userInfoPromise = Promise.resolve({});
            } else {
                userInfoPromise = auth.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
            }
            userInfoPromise = userInfoPromise.then((result) => {
                const userInfo = result.Data;
                const $global = Vue.prototype.$global || {};
                $global.userInfo = userInfo;
                return userInfo;
            }).catch((e) => {
                userInfoPromise = null;
                throw e;
            });
        }
        return userInfoPromise;
    },
    getUserResources(DomainName) {
        if (!userResourcesPromise) {
            // if (window.appInfo.hasAuth) {
            userResourcesPromise = lowauth.GetUserResources({
                headers: getBaseHeaders(),
                query: {
                    userId: Vue.prototype.$global.userInfo.UserId,
                },
            }).then((result) => {
                const resources = result.filter((resource) => resource.resourceType === 'ui');
                // 初始化权限项
                this._map = new Map();
                resources.forEach((resource) => this._map.set(resource.resourceValue, resource));
                return resources;
            }).catch((e) => {
                // console.error('获取权限异常', e);
                userResourcesPromise = null;
            }).finally(() => {
                if (!this._map) {
                    this._map = new Map();
                }
            });
            // } else {
            //     userResourcesPromise = auth.GetUserResources({
            //         headers: getBaseHeaders(),
            //         query: {
            //             DomainName,
            //         },
            //     }).then((result) => {
            //         const resources = result.Data.items.filter((resource) => resource.ResourceType === 'ui');
            //         // 初始化权限项
            //         this._map = new Map();
            //         resources.forEach((resource) => this._map.set(resource.ResourceValue, resource));
            //         return resources;
            //     }).catch((e) => {
            //         console.error('获取权限异常', e);
            //         userResourcesPromise = null;
            //     }).finally(() => {
            //         if (!this._map) {
            //             this._map = new Map();
            //         }
            //     });
            // }
        }
        return userResourcesPromise;
    },
    logout() {
        if (window.appInfo.hasUserCenter) {
            // 用户中心，去除认证和用户名信息
            cookie.erase('authorization');
            cookie.erase('username');
        } else {
            return auth.Logout({
                headers: getBaseHeaders(),
            }).then(() => {
                cookie.erase('authorization');
                cookie.erase('username');
            });
        }
    },
    /**
     * 权限服务是否初始化
     */
    isInit() {
        return !!this._map;
    },
    /**
     * 初始化权限服务
     */
    init(domainName) {
        return this.getUserInfo().then(() => this.getUserResources(domainName));
    },
    /**
     * 是否有权限
     * @param {*} authPath 权限路径，如 /dashboard/entity/list
     */
    has(authPath) {
        return this._map ? this._map.has(authPath) : true;
    },
};
