import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import { utils as cutils } from 'cloud-ui.vusion';
import { addDays, subDays, format, parse, formatRFC3339 } from 'date-fns';
let enumsMap = {};

export const utils = {
    gql,
    Enum(enumName, value) {
        if (arguments.length === 0)
            return '';
        else if (arguments.length === 1)
            return enumsMap[enumName];
        else if (enumsMap[enumName])
            return enumsMap[enumName](value);
        else
            return '';
    },
    EnumValue(enumName, value) {
        return value;
    },
    EnumLabel(enumName, value) {
        if (arguments.length === 0)
            return '';
        else if (arguments.length === 1)
            return enumsMap[enumName];
        else if (enumsMap[enumName])
            return enumsMap[enumName](value);
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
        return new Date().toJSON().replace(/T.+?Z/, '');
    },
    CurrTime() {
        return new Date().toTimeString().split(' ')[0];
    },
    CurrDateTime() {
        return new Date().toJSON();
    },
    AddDays(date = new Date(), amount = 1, formatter = 'yyyy-MM-dd') {
        return format(addDays(parse(date, 'yyyy-MM-dd', new Date()), amount), formatter);
    },
    SubDays(date = new Date(), amount = 1, formatter = 'yyyy-MM-dd') {
        return format(subDays(parse(date, 'yyyy-MM-dd', new Date()), amount), formatter);
    },
    FormatDate(value, formatter) {
        if(!value) return '-';
        return cutils.dateFormatter.format(value, formatter);
    },
    FormatDateTime(value) {
        if(!value) return '-';
        return cutils.dateFormatter.format(value);
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
    Convert(value, schema) {
        const { type, format } = schema;

        if(type === 'string') {
            switch(format) {
                case 'date-time':
                    return formatRFC3339(new Date(value));
                case 'date':
                    return format(new Date(value), 'yyyy-MM-dd');
                case 'time':
                    return format(new Date(value), 'HH:mm:ss');
                case '':  // 字符串
                    return String(value);
            }
        }

        if(type === 'number' && format === 'double')  // 小数
            return parseFloat(+value);

        if(type === 'integer')  // 整数： format 'int' ; 长整数: format: 'long'
            return parseInt(+value);

        if(type === 'boolean')  // 布尔值
            return !!value;
    },
};

export default {
    install(Vue, options) {
        Vue.prototype.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
