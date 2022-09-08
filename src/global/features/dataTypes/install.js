import generate from 'babel-generator'; // @babel/generator use ES6, not support IE11
import CryptoJS from 'crypto-js';
import { genInitData } from './tools';
import auth from '../router/auth';
import configurationService from '@/global/services/configuration';
import processService from '@/global/features/service/process';

window.CryptoJS = CryptoJS;
const aesKey = ';Z#^$;8+yhO!AhGo';

export default {
    install(Vue, options = {}) {
        const $global = {
            userInfo: {},
            requestFullscreen() {
                return document.body.requestFullscreen();
            },
            exitFullscreen() {
                return document.exitFullscreen();
            },
            hasAuth(authPath) {
                return auth.has(authPath);
            },
            encryptByAES(message, key = aesKey) {
                const keyHex = CryptoJS.enc.Utf8.parse(key); //
                const messageHex = CryptoJS.enc.Utf8.parse(message);
                const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                });
                return encrypted.toString();
            },
            decryptByAES(messageBase64, key = aesKey) {
                const keyHex = CryptoJS.enc.Utf8.parse(key);
                const decrypt = CryptoJS.AES.decrypt(messageBase64, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                });
                const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            },
            getLocation() {
                return new Promise((res, rej) => {
                    function showPosition(position) {
                        const { latitude, longitude } = position.coords;
                        // eslint-disable-next-line no-console
                        console.log(latitude, longitude);
                        const [mglng, mglat] = [longitude, latitude];
                        res(`${mglng},${mglat}`);
                    }
                    function showError(error) {
                        // eslint-disable-next-line no-console
                        console.log(error, error.code);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                this.$toast.show('用户禁止获取地理定位');
                                rej({ code: error.code, msg: '用户禁止获取地理定位' });
                                break;
                            case error.POSITION_UNAVAILABLE:
                                this.$toast.show('地理定位信息无法获取');
                                rej({ code: error.code, msg: '地理定位信息无法获取' });
                                break;
                            case error.TIMEOUT:
                                this.$toast.show('地理定位信息获取超时');
                                rej({ code: error.code, msg: '地理定位信息获取超时' });
                                break;
                            case error.UNKNOWN_ERROR:
                                this.$toast.show('未知错误');
                                rej({ code: error.code, msg: '未知错误' });
                                break;
                        }
                    }
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition, showError);
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('Geolocation is not supported by this browser.');
                        this.$toast.show('当前系统不支持地理定位');
                        rej({ code: 666, msg: '当前系统不支持地理定位' });
                    }
                });
            },
            getDistance(s1, s2) {
                function deg2rad(deg) {
                    return deg * (Math.PI / 180);
                }
                const lat1t = s1.split(',')[1];
                const lng1t = s1.split(',')[0];
                const lat2t = s2.split(',')[1];
                const lng2t = s2.split(',')[0];

                const R = 6371; // Radius of the earth in km
                const dLat = deg2rad(lat2t - lat1t); // deg2rad below
                const dLon = deg2rad(lng2t - lng1t);
                const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                    + Math.cos(deg2rad(lat1t)) * Math.cos(deg2rad(lat2t)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const d = R * c; // Distance in km
                return d * 1000;
            },
            logout() {
                Vue.prototype.$confirm('确定退出登录吗？', '提示')
                    .then(() => Vue.prototype.$auth.logout())
                    .then(() => {
                        const cookies = document.cookie.split(';');
                        cookies.forEach((cookie) => {
                            const eqPos = cookie.indexOf('=');
                            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                            const d = new Date();
                            d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
                            document.cookie = `${name}=; expires=${d.toGMTString()}; path=/`;
                        });
                        location.reload();
                    });
            },
            async getCustomConfig(configKey = '') {
                const res = await configurationService.getCustomConfig({
                    path: { configKey },
                });
                return res;
            },
        };
        Object.keys(processService).forEach((service) => {
            $global[service] = processService[service];
        });
        new Vue({
            data: {
                $global,
            },
        });

        Vue.prototype.$global = $global;

        /**
         * read datatypes from template, then parse schema
         * @param {*} schema 是前端用的 refSchema
         */
        Vue.prototype.$genInitFromSchema = (schema = {}, defaultValue, isRouteParam) => {
            schema.defaultValue = defaultValue;

            // read from file
            const dataTypesMap = options.dataTypesMap || {}; // TODO 统一为  dataTypesMap
            const expressDataTypeObject = genInitData(schema, dataTypesMap, isRouteParam);
            const expression = generate(expressDataTypeObject).code;
            // eslint-disable-next-line no-new-func
            return Function('return ' + expression)();
        };

        const enumsMap = options.enumsMap || {};
        function createEnum(items) {
            const Enum = (key) => items[key];
            Object.assign(Enum, items);
            return Enum;
        }
        Object.keys(enumsMap).forEach((enumKey) => {
            enumsMap[enumKey] = createEnum(enumsMap[enumKey] || {});
        });

        Vue.prototype.$enums = (key, value) => {
            if (!key || !value)
                return '';
            if (enumsMap[key]) {
                return enumsMap[key](value);
            } else {
                return '';
            }
        };
    },
};
