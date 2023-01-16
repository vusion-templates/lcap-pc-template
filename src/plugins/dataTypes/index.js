import generate from 'babel-generator'; // @babel/generator use ES6, not support IE11
import { Decimal } from 'decimal.js';
import CryptoJS from 'crypto-js';
import cookie from '@/utils/cookie';

import configuration from '@/apis/configuration';
import lowauth from '@/apis/lowauth';
import io from '@/apis/io';
import authService from '../auth/authService';
import { genInitData } from './tools';
import { porcessPorts } from '../router/processService';

window.CryptoJS = CryptoJS;
const aesKey = ';Z#^$;8+yhO!AhGo';

export default {
    install(Vue, options = {}) {
        const genInitFromSchema = (schema = {}, defaultValue) => {
            if (!schema)
                schema = {};
            schema.defaultValue = defaultValue;

            // read from file
            const dataTypesMap = options.dataTypesMap || {}; // TODO 统一为  dataTypesMap
            const expressDataTypeObject = genInitData(schema, dataTypesMap);
            const expression = generate(expressDataTypeObject).code;
            // eslint-disable-next-line no-new-func
            return Function('return ' + expression)();
        };
        const frontendVariables = {};
        if (Array.isArray(options && options.frontendVariables)) {
            options.frontendVariables.forEach((frontendVariable) => {
                const { name, typeAnnotation, defaultValue } = frontendVariable;
                frontendVariables[name] = genInitFromSchema(typeAnnotation, defaultValue);
            });
        }

        const $global = {
            // 用户信息
            userInfo: {},
            // 前端全局变量
            frontendVariables,
            // 加
            add(x, y) {
                if (typeof (x) !== 'number' || typeof (y) !== 'number') {
                    return x + y;
                }
                if (!x) {
                    x = 0;
                }
                if (!y) {
                    y = 0;
                }
                const xx = new Decimal(x + '');
                const yy = new Decimal(y + '');
                return xx.plus(yy).toNumber();
            },
            // 减
            minus(x, y) {
                if (!x) {
                    x = 0;
                }
                if (!y) {
                    y = 0;
                }
                const xx = new Decimal(x + '');
                const yy = new Decimal(y + '');
                return xx.minus(yy).toNumber();
            },
            // 乘
            multiply(x, y) {
                if (!x) {
                    x = 0;
                }
                if (!y) {
                    y = 0;
                }
                const xx = new Decimal(x + '');
                const yy = new Decimal(y + '');
                return xx.mul(yy).toNumber();
            },
            // 除
            divide(x, y) {
                if (!x) {
                    x = 0;
                }
                if (!y) {
                    y = 0;
                }
                const xx = new Decimal(x + '');
                const yy = new Decimal(y + '');
                return xx.div(yy).toNumber();
            },
            requestFullscreen() {
                return document.body.requestFullscreen();
            },
            exitFullscreen() {
                return document.exitFullscreen();
            },
            encryptByAES({ string: message }, key = aesKey) {
                const keyHex = CryptoJS.enc.Utf8.parse(key); //
                const messageHex = CryptoJS.enc.Utf8.parse(message);
                const encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                });
                return encrypted.toString();
            },
            decryptByAES({ string: messageBase64 }, key = aesKey) {
                const keyHex = CryptoJS.enc.Utf8.parse(key);
                const decrypt = CryptoJS.AES.decrypt(messageBase64, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7,
                });
                const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            },
            hasAuth({ string: authPath }) {
                return authService.has(authPath);
            },
            getLocation() {
                return new Promise((res, rej) => {
                    function showPosition(position) {
                        const { latitude, longitude } = position.coords;
                        const [mglng, mglat] = [longitude, latitude];
                        res(`${mglng},${mglat}`);
                    }
                    function showError(error) {
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
                Vue.prototype.$confirm({
                    content: '确定退出登录吗？',
                    title: '提示',
                    okButton: '确定',
                    cancelButton: '取消',
                })
                    .then(() => Vue.prototype.$auth.logout())
                    .then(() => {
                        cookie.erase('authorization');
                        cookie.erase('username');
                        location.reload();
                    });
            },
            async downloadFile(url, fileName) {
                await io.downloadFiles({
                    body: {
                        urls: [url],
                        fileName,
                    },
                }).then((res) => Promise.resolve(res))
                    .catch((err) => Promise.resolve(err));
            },
            async downloadFiles(urls, fileName) {
                await io.downloadFiles({
                    body: {
                        urls,
                        fileName,
                    },
                }).then((res) => Promise.resolve(res))
                    .catch((err) => Promise.resolve(err));
            },
            async getCustomConfig(configKey = '') {
                const res = await configuration.getCustomConfig({
                    path: { configKey },
                });
                return res;
            },
            async getCurrentIp() {
                const res = await configuration.getCurrentIp();
                return res;
            },
            async getProcessStartBy(query) {
                const appEnv = window.appInfo.env;
                const cookies = document.cookie.split('; ');
                const token = cookies.find((cookie) => cookie.split('=')[0] === 'authorization')?.split('=')[1];
                const res = await lowauth.getProcessStartBy({
                    body: {
                        appEnv,
                        token,
                        ...query,
                    },
                });
                return res;
            },
        };
        Object.keys(porcessPorts).forEach((service) => {
            $global[service] = porcessPorts[service];
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
        Vue.prototype.$genInitFromSchema = genInitFromSchema;

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

