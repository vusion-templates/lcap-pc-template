import Vue from 'vue';
import auth from '@/apis/auth';
import lowauth from '@/apis/lowauth';
import cookie from '@/utils/cookie';

const getBaseHeaders = () => {
    const headers = {
        Env: window.appInfo && window.appInfo.env,
    };
    if (cookie.get('authorization')) {
        headers.Authorization = cookie.get('authorization');
    }
    return headers;
};

let userInfoPromise = null;
let userResourcesPromise = null;

export default {
    _map: undefined,
    getUserInfo() {
        if (!userInfoPromise) {
            if (window.appInfo.hasUserCenter) {
                userInfoPromise = lowauth.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
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
                if (!userInfo.UserId && userInfo.userId) {
                    userInfo.UserId = userInfo.userId;
                    userInfo.UserName = userInfo.userName;
                }
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
        if (window.appInfo.hasAuth) {
            userResourcesPromise = lowauth.GetUserResources({
                headers: getBaseHeaders(),
                query: {
                    userId: Vue.prototype.$global.userInfo.UserId,
                    userName: Vue.prototype.$global.userInfo.UserName,
                },
                config: {
                    noErrorTip: true,
                },
            }).then((result) => {
                let resources = [];
                // 初始化权限项
                this._map = new Map();
                if (Array.isArray(result)) {
                    resources = result.filter((resource) => resource?.resourceType === 'ui');
                    resources.forEach((resource) => this._map.set(resource.resourceValue, resource));
                }
                return resources;
            });
        } else {
            userResourcesPromise = auth.GetUserResources({
                headers: getBaseHeaders(),
                query: {
                    DomainName,
                },
                config: {
                    noErrorTip: true,
                },
            }).then((res) => {
                this._map = new Map();
                const result = res?.Data?.items || [];
                const resources = result.filter((resource) => resource?.ResourceType === 'ui');
                // 初始化权限项
                resources.forEach((resource) => this._map.set(resource?.ResourceValue, resource));
                return resources;
            });
        }
        return userResourcesPromise;
    },
    async getKeycloakLogoutUrl() {
        let logoutUrl = '';
        if (window.appInfo.hasUserCenter) {
            const res = await lowauth.getAppLoginTypes({
                query: {
                    Action: 'GetTenantLoginTypes',
                    Version: '2020-06-01',
                    TenantName: window.appInfo.tenant,
                },
            });
            const KeycloakConfig = res?.Data.Keycloak;
            if (KeycloakConfig) {
                logoutUrl = `${KeycloakConfig?.config?.logoutUrl}?redirect_uri=${window.location.protocol}//${window.location.host}/login`;
            }
        } else {
            const res = await auth.getNuimsTenantLoginTypes({
                query: {
                    Action: 'GetTenantLoginTypes',
                    Version: '2020-06-01',
                    TenantName: window.appInfo.tenant,
                },
            });
            const KeycloakConfig = res?.Data.find((item) => (item.LoginType === 'Keycloak'));
            if (KeycloakConfig) {
                logoutUrl = `${KeycloakConfig?.extendProperties?.logoutUrl}?redirect_uri=${window.location.protocol}//${window.location.host}/login`;
            }
        }

        return logoutUrl;
    },
    async logout() {
        const sleep = (t) => new Promise((r) => setTimeout(r, t));

        if (window.appInfo.hasUserCenter) {
            const logoutUrl = await this.getKeycloakLogoutUrl();
            localStorage.setItem('logoutUrl', logoutUrl);
            if (logoutUrl) {
                window.location.href = logoutUrl;
                await sleep(1000);
            } else {
                return lowauth.Logout({
                    headers: getBaseHeaders(),
                }).then(() => {
                    // 用户中心，去除认证和用户名信息
                    cookie.erase('authorization');
                    cookie.erase('username');
                });
            }
        } else {
            const logoutUrl = await this.getKeycloakLogoutUrl();
            localStorage.setItem('logoutUrl', logoutUrl);
            if (logoutUrl) {
                window.location.href = logoutUrl;
                await sleep(1000);
            } else {
                return auth.Logout({
                    headers: getBaseHeaders(),
                }).then(() => {
                    cookie.erase('authorization');
                    cookie.erase('username');
                });
            }
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
        return (this._map && this._map.has(authPath)) || false;
    },
};
