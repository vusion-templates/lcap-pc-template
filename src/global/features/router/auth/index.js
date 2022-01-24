import Vue from 'vue';
import authService from '@/global/services/auth';
import lowauthService from '@/global/services/lowauth';
import cookie from '@/global/features/utils/cookie';

const getBaseHeaders = () => ({
    Authorization: cookie.get('authorization'),
    Env: window.appInfo && window.appInfo.env,
});

export default {
    _map: undefined,
    getUserInfo() {
        if (window.appInfo.hasUserCenter) {
            return lowauthService.GetUser({
                headers: getBaseHeaders(),
                config: {
                    noErrorTip: true,
                },
            }).then((result) => {
                const userInfo = result.Data;
                const $global = Vue.prototype.$global = Vue.prototype.$global || {};
                // 格式转化
                $global.userInfo = {
                    UserName: userInfo?.userName,
                    UserId: userInfo?.userId,
                };
                return userInfo;
            });
        } else {
            return authService.GetUser({
                headers: getBaseHeaders(),
                config: {
                    noErrorTip: true,
                },
            }).then((result) => {
                const userInfo = result.Data;
                const $global = Vue.prototype.$global = Vue.prototype.$global || {};
                $global.userInfo = userInfo;
                return userInfo;
            });
        }
    },
    getUserResources(DomainName) {
        if (window.appInfo.hasAuth) {
            return lowauthService.GetUserResources({
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
            });
        } else {
            return authService.GetUserResources({
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
            });
        }
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
