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
        };

        /**
         * read datatypes from template, then parse schema
         * @param {*} schema 是前端用的 refSchema
         */
        Vue.prototype.$genInitFromSchema = (schema = {}, defaultValue, isRouteParam) => {
            schema.defaultValue = defaultValue;

            // read from file
            const dataTypesMap = options.dataTypesMap || {}; // TODO 统一为  dataTypesMap
            const expressDataTypeObject = genInitData(schema, dataTypesMap);
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
