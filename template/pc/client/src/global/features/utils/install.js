import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import enums from '../../enums';

export const utils = {
    gql,
    Enum(enumName, value) {
        if (arguments.length === 0)
            return '';
        else if (arguments.length === 1)
            return enums[enumName];
        else if (enums[enumName])
            return enums[enumName](value);
        else
            return '';
    },
    Split(str, seperator) {
        return str.split(seperator);
    },
    Join(arr, seperator) {
        return arr.join(seperator);
    },
    Concat(str1, str2) {
        if (Array.isArray(str1) && Array.isArray(str2))
            return [].concat(str1, str2);
        else
            return str1 + str2;
    },
    Length(str1) {
        return str1.length;
    },
    ToLower(str) {
        return str.toLowerCase();
    },
    ToUpper(str) {
        return str.toUpperCase();
    },
    Trim(str) {
        return str.trim();
    },
    Get(arr, index) {
        return arr[index];
    },
    Set(arr, index, item) {
        return arr[index] = item;
    },
    Add(arr, item) {
        return arr.push(item);
    },
    Insert(arr, index, item) {
        return arr.splice(index, 0, item);
    },
    Remove(arr, item) {
        const index = arr.indexOf(item);
        return ~index && arr.splice(index, 1);
    },
    RemoveAt(arr, index) {
        return arr.splice(arr, index);
    },
    CurrDate() {
        return new Date().toJSON().replace(/T.+?Z/, 'T00:00:00.000Z');
    },
    CurrTime() {
        return new Date().toTimeString().split(' ')[0];
    },
    CurrDateTime() {
        return new Date().toJSON();
    },
    Clone(obj) {
        return cloneDeep(obj);
    },
    New(obj) {
        return obj;
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
