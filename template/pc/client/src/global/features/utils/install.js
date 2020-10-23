import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import enums from '../../enums';

export const utils = {
    gql,
    Enum(key, value) {
        if (arguments.length === 0)
            return '';
        else if (arguments.length === 1)
            return enums[key];
        else if (enums[key])
            return enums[key](value);
        else
            return '';
    },
    Split(str, seperator) {
        return str.split(seperator);
    },
    Join(arr, seperator) {
        return arr.join(seperator);
    },
    Clone(obj) {
        return cloneDeep(obj);
    },
    /**
     * 这是个临时的方法。。。
     * @param {*} obj1
     * @param {*} obj2
     */
    ClearObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === undefined || obj[key] === null)
                delete obj[key];
        }
        return obj;
    },
    Merge(obj1, obj2) {
        return Object.assign(obj1, obj2);
    },
    tryJSONParse(str) {
        let result;

        try {
            result = JSON.parse(str);
        } catch (e) {}

        return result;
    },
};

export default {
    install(Vue, options) {
        Vue.prototype.$utils = utils;
    },
};
