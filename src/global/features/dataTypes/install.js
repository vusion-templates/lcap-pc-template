import generate from '@babel/generator';
import { genInitData } from './tools';
import auth from '../router/auth';

export default {
    install(Vue, options = {}) {
        Vue.prototype.$global = {
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
            getLocation() {
                return new Promise((res, rej) => {
                    function showPosition(position) {
                        const { latitude, longitude } = position.coords;
                        // eslint-disable-next-line no-console
                        console.log(latitude, longitude);
                        res(`${latitude},${longitude}`);
                    }
                    function showError(error) {
                        // eslint-disable-next-line no-console
                        console.log(error, error.code);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                this.$toast('用户禁止获取地理定位');
                                rej({ code: error.code, msg: '用户禁止获取地理定位' });
                                break;
                            case error.POSITION_UNAVAILABLE:
                                this.$toast('地理定位信息无法获取');
                                rej({ code: error.code, msg: '地理定位信息无法获取' });
                                break;
                            case error.TIMEOUT:
                                this.$toast('地理定位信息获取超时');
                                rej({ code: error.code, msg: '地理定位信息获取超时' });
                                break;
                            case error.UNKNOWN_ERROR:
                                this.$toast('未知错误');
                                rej({ code: error.code, msg: '未知错误' });
                                break;
                        }
                    }
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition, showError);
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('Geolocation is not supported by this browser.');
                        this.$toast('当前系统不支持地理定位');
                        rej({ code: 666, msg: '当前系统不支持地理定位' });
                    }
                });
            },
            getFlatternDistance(s1, s2) {
                const EARTH_RADIUS = 6378137.0;
                const PI = Math.PI;
                function getRad(d) {
                    return d * PI / 180.0;
                }
                const lat1 = s1.split(',')[0];
                const lng1 = s1.split(',')[1];
                const lat2 = s2.split(',')[0];
                const lng2 = s2.split(',')[1];

                const f = getRad((lat1 + lat2) / 2);
                const g = getRad((lat1 - lat2) / 2);
                const l = getRad((lng1 - lng2) / 2);

                let sg = Math.sin(g);
                let sl = Math.sin(l);
                let sf = Math.sin(f);

                let s; let c; let w; let r; let d; let h1; let h2;
                const a = EARTH_RADIUS;
                const fl = 1 / 298.257;

                sg = sg * sg;
                sl = sl * sl;
                sf = sf * sf;

                // eslint-disable-next-line prefer-const
                s = sg * (1 - sl) + (1 - sf) * sl;
                // eslint-disable-next-line prefer-const
                c = (1 - sg) * (1 - sl) + sf * sl;

                // eslint-disable-next-line prefer-const
                w = Math.atan(Math.sqrt(s / c));
                // eslint-disable-next-line prefer-const
                r = Math.sqrt(s * c) / w;
                // eslint-disable-next-line prefer-const
                d = 2 * w * a;
                // eslint-disable-next-line prefer-const
                h1 = (3 * r - 1) / 2 / c;
                // eslint-disable-next-line prefer-const
                h2 = (3 * r + 1) / 2 / s;

                return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
            },
        };

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
