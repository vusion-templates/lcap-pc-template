import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import { utils as cutils } from 'cloud-ui.vusion';
import { addDays, subDays, addMonths, format, parse, formatRFC3339 } from 'date-fns';
let enumsMap = {};

function toValue(date, converter) {
    if (!date)
        return date;
    if (converter === 'format')
        return this.format(date, 'YYYY-MM-DD'); // value 的真实格式
    else if (converter === 'json')
        return date.toJSON();
    else if (converter === 'timestamp')
        return date.getTime();
    else
        return date;
}

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
        return arr.splice(index, 1);
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
    AddDays(date = new Date(), amount = 1, converter = 'json') {
        return toValue(addDays(new Date(date), amount), converter);
    },
    AddMonths(date = new Date(), amount = 1, converter = 'json') {
        /** 传入的值为标准的时间格式 */
        return toValue(addMonths(new Date(date), amount), converter);
    },
    SubDays(date = new Date(), amount = 1, converter = 'json') {
        return toValue(subDays(new Date(date), amount), converter);
    },
    FormatDate(value, formatter) {
        if (!value)
            return '-';
        return cutils.dateFormatter.format(value, formatter);
    },
    FormatDateTime(value, formatter) {
        if (!value)
            return '-';
        return cutils.dateFormatter.format(value, formatter);
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
    RandomInt(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }

        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new TypeError('Expected all arguments to be numbers');
        }

        return Math.floor((Math.random() * (max - min + 1)) + min);
    },
    tryJSONParse(str) {
        let result;

        try {
            result = JSON.parse(str);
        } catch (e) {}

        return result;
    },
    Convert(value, schema) {
        const { type, format: formatVar } = schema;

        if (type === 'string') {
            switch (formatVar) {
                case 'date-time':
                    return formatRFC3339(new Date(value));
                case 'date':
                    return format(new Date(value), 'yyyy-MM-dd');
                case 'time':
                    return format(new Date(value), 'HH:mm:ss');
                case '': // 字符串
                    return String(value);
            }
        }

        if (type === 'number' && formatVar === 'double') // 小数
            return parseFloat(+value);

        if (type === 'integer') // 整数： format 'int' ; 长整数: format: 'long'
            return Math.round(+value);

        if (type === 'boolean') // 布尔值
            return !!value;
    },
};

export default {
    install(Vue, options) {
        Vue.prototype.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
