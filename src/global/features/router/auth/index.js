import Vue from 'vue';
import authService from '@/global/services/auth';
import cookie from '@/global/features/utils/cookie';

let userInfoPromise = null;
let userResourcesPromise = null;
const maxTimes = 3;
const getBaseHeaders = () => ({
    Authorization: cookie.get('authorization'),
    Env: window.appInfo && window.appInfo.env,
});

const request = function (times) {
    return authService.GetUser({
        headers: getBaseHeaders(),
        config: {
            noErrorTip: true,
        },
    }).then((result) => result.Data).catch((err) => {
        times--;
        if (times > 0) {
            return request(times);
        } else {
            throw err;
        }
    });
};
const auth = {
    _map: undefined,
    getUserInfo(times = 1) {
        if (!userInfoPromise) {
            userInfoPromise = request(times).then((userInfo) => {
                const $global = Vue.prototype.$global = Vue.prototype.$global || {};
                $global.userInfo = userInfo;
                return userInfo;
            }).catch((e) => {
                userInfoPromise = undefined;
                throw e;
            });
        }
        return userInfoPromise;
    },
    getUserResources(DomainName) {
        if (!userResourcesPromise) {
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
            }).catch((e) => {
                // 获取权限异常
                userResourcesPromise = undefined;
            });
        }
        return userResourcesPromise;
    },
    logout() {
        return authService.Logout({
            headers: getBaseHeaders(),
        }).then(() => {
            cookie.erase('authorization');
            cookie.erase('username');
        });
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
    init(domainName, times) {
        return this.getUserInfo(times || maxTimes).then(() => this.getUserResources(domainName));
    },
    /**
     * 是否有权限
     * @param {*} authPath 权限路径，如 /dashboard/entity/list
     */
    has(authPath) {
        return this._map ? this._map.has(authPath) : true;
    },
};
export default auth;

export const runAhead = function (domainName, times) {
    auth.init(domainName, times);
};
