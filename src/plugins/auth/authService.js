import Vue from 'vue';
import { initService as authInitService } from '@/apis/auth';
import { initService as lowauthInitService } from '@/apis/lowauth';
import cookie from '@/utils/cookie';
import { getBasePath } from '@/utils/encodeUrl';

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
    authService: undefined,
    lowauthInitService: undefined,
    start() {
        this.authService = authInitService();
        this.lowauthInitService = lowauthInitService();
        window.authService = this.authService;
    },
    getUserInfo() {
        if (!userInfoPromise) {
            if (window.appInfo.hasUserCenter) {
                userInfoPromise = this.lowauthInitService.GetUser({
                    headers: getBaseHeaders(),
                    config: {
                        noErrorTip: true,
                    },
                });
            } else {
                userInfoPromise = this.authService.GetUser({
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
            userResourcesPromise = this.lowauthInitService.GetUserResources({
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
                    resources = result.filter((resource) => resource?.resourceType === 'page');
                    resources.forEach((resource) => this._map.set(resource.resourceValue, resource));
                }
                return resources;
            });
        } else {
            userResourcesPromise = this.authService.GetUserResources({
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
        const basePath = getBasePath();
        if (window.appInfo.hasUserCenter) {
            const res = await this.lowauthInitService.getAppLoginTypes({
                query: {
                    Action: 'GetTenantLoginTypes',
                    Version: '2020-06-01',
                    TenantName: window.appInfo.tenant,
                },
            });
            const KeycloakConfig = res?.Data.Keycloak;
            if (KeycloakConfig) {
                logoutUrl = `${KeycloakConfig?.config?.logoutUrl}?redirect_uri=${window.location.protocol}//${window.location.host}${basePath}/login`;
            }
        } else {
            const res = await this.authService.getNuimsTenantLoginTypes({
                query: {
                    Action: 'GetTenantLoginTypes',
                    Version: '2020-06-01',
                    TenantName: window.appInfo.tenant,
                },
            });
            const KeycloakConfig = res?.Data.find((item) => (item.LoginType === 'Keycloak'));
            if (KeycloakConfig) {
                logoutUrl = `${KeycloakConfig?.extendProperties?.logoutUrl}?redirect_uri=${window.location.protocol}//${window.location.host}${basePath}/login`;
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
                return this.lowauthInitService.Logout({
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
                return this.authService.Logout({
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
