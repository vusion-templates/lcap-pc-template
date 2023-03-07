import Vue from 'vue';
import authService from '@/global/services/auth';
import lowauthService from '@/global/services/lowauth';
import cookie from '@/global/features/utils/cookie';

const getBaseHeaders = () => ({
    Authorization: cookie.get('authorization'),
    Env: window.appInfo && window.appInfo.env,
});

let userInfoPromise = null;
let userResourcesPromise = null;
const userInfo = {
    UserName: cookie.get('zzdUserName') || '',
    UserId: cookie.get('zzdUserId') || '',
};

const $global = Vue.prototype.$global = Vue.prototype.$global || {};
$global.userInfo = userInfo.UserId ? userInfo : $global.userInfo;
export default {
    _map: undefined,
    setUserInfoFromCookie() {
        const userInfo = {
            UserName: cookie.get('zzdUserName') || '',
            UserId: cookie.get('zzdUserId') || '',
        };
        const $global = Vue.prototype.$global = Vue.prototype.$global || {};
        $global.userInfo = userInfo.UserId ? userInfo : $global.userInfo;
    },
    getUserInfo() {
        if (!userInfoPromise) {
            // let isZZD = window.appInfo.envConfig.name === 'zhezhengding'
            let isZZD = false;
            if (window.appInfo?.extendedConfig && JSON.parse(window.appInfo.extendedConfig)) {
                isZZD = JSON.parse(window.appInfo.extendedConfig)?.amapKey === 'zhezhengding';
            }

            if (window.appInfo.hasUserCenter || isZZD) {
                const userInfo = {
                    UserName: cookie.get('zzdUserName') || '',
                    UserId: cookie.get('zzdUserId') || '',
                };
                userInfoPromise = Promise.resolve({ Data: userInfo });
            } else {
                userInfoPromise = authService.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
            }
            userInfoPromise = userInfoPromise.then((result) => {
                const userInfo = result.Data;
                const $global = Vue.prototype.$global = Vue.prototype.$global || {};

                $global.userInfo = userInfo.UserId ? userInfo : $global.userInfo;
                return userInfo;
            }).catch((e) => {
                userInfoPromise = null;
                throw e;
            });
        }
        const userInfo = {
            UserName: cookie.get('zzdUserName') || '',
            UserId: cookie.get('zzdUserId') || '',
        };
        const $global = Vue.prototype.$global = Vue.prototype.$global || {};

        $global.userInfo = userInfo.UserId ? userInfo : $global.userInfo;
        return userInfoPromise;
    },
    getUserResources(DomainName) {
        if (!userResourcesPromise) {
            if (window.appInfo.hasAuth) {
                let userId;
                if (Vue.prototype.$global?.userInfo?.UserId) {
                    userId = Vue.prototype.$global.userInfo.UserId;
                } else {
                    userId = cookie.get('zzdUserId') || Vue.prototype.$global.userInfo.UserId;
                }
                this.setUserInfoFromCookie();
                userResourcesPromise = lowauthService.GetUserResources({
                    headers: getBaseHeaders(),
                    query: {
                        userId,
                    },
                }).then((result) => {
                    const resources = result.filter((resource) => resource.resourceType === 'ui');
                    // 初始化权限项
                    this._map = new Map();
                    resources.forEach((resource) => this._map.set(resource.resourceValue, resource));
                    return resources;
                }).catch((e) => {
                    console.error('获取权限异常', e);
                    userResourcesPromise = null;
                });
            } else {
                userResourcesPromise = authService.GetUserResources({
                    headers: getBaseHeaders(),
                    query: {
                        DomainName,
                    },
                }).then((result) => {
                    const resources = result.Data.items.filter((resource) => resource.ResourceType === 'ui');
                    // 初始化权限项
                    this._map = new Map();
                    resources.forEach((resource) => this._map.set(resource.ResourceValue, resource));
                    return resources;
                }).catch((e) => {
                    console.error('获取权限异常', e);
                    userResourcesPromise = null;
                });
            }
        }
        return userResourcesPromise;
    },
    logout() {
        if (window.appInfo.hasUserCenter) {
            // 用户中心，去除认证和用户名信息
            cookie.erase('authorization');
            cookie.erase('username');
        } else {
            return authService.Logout({
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
