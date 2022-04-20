import Vue from 'vue';
import authService from '@/global/services/auth';
import lowauthService from '@/global/services/lowauth';
import cookie from '@/global/features/utils/cookie';

const getBaseHeaders = () => ({
    Authorization: cookie.get('authorization'),
    Env: window.appInfo && window.appInfo.env,
});

const getTenant = () => {
    const hostArr = location.host.split('.');
    const length = hostArr.length;
    // 制品的租户标记
    return hostArr[length - 3];
};

let userInfoPromise = null;
let userResourcesPromise = null;

export default {
    _map: undefined,
    getUserInfo() {
        if (!userInfoPromise) {
            if (window.appInfo.hasUserCenter) {
                userInfoPromise = lowauthService.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
            } else {
                userInfoPromise = authService.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
            }
            userInfoPromise = userInfoPromise.then((result) => {
                let userInfo = result.Data;
                const $global = Vue.prototype.$global = Vue.prototype.$global || {};
                if (window.appInfo.hasUserCenter) {
                    // 格式转化
                    userInfo = {
                        UserName: userInfo.userName,
                        UserId: userInfo.userId,
                    };
                }
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
            if (window.appInfo.hasAuth) {
                userResourcesPromise = lowauthService.GetUserResources({
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

    async getKeycloakLogoutUrl() {
        let logoutUrl = '';
        const res = await authService.GetNuimsConfig({
            query: {
                Action: 'GetTenantLoginTypes',
                Version: '2020-06-01',
                TenantName: getTenant(),
            },
        });

        const KeycloakConfig = res?.Data.find((item) => (item.LoginType === 'Keycloak'));
        if (KeycloakConfig) {
            logoutUrl = `${KeycloakConfig?.extendProperties?.logout_url}?redirect_uri=${window.location.protocol}//${window.location.host}/login`;
        }
        return logoutUrl;
    },
    async logout() {
        if (window.appInfo.hasUserCenter) {
            // 用户中心，去除认证和用户名信息
            cookie.erase('authorization');
            cookie.erase('username');
        } else {
            const sleep = (t) => new Promise((r) => setTimeout(r, t));
            const logoutUrl = await this.getKeycloakLogoutUrl();
            localStorage.setItem('logoutUrl', logoutUrl);
            if (logoutUrl) {
                this.jumpTo(logoutUrl);
                sleep(100);
            } else {
                return authService.Logout({
                    headers: getBaseHeaders(),
                }).then(() => {
                    cookie.erase('authorization');
                    cookie.erase('username');
                });
            }
        }
    },
    jumpTo(url) {
        window.location.href = url;
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
