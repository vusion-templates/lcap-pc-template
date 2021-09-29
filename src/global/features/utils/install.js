import gql from 'graphql-tag';
import cloneDeep from 'lodash/cloneDeep';
import { utils as cutils } from 'cloud-ui.vusion';
import { addDays, subDays, addMonths, format, parse, formatRFC3339, isValid } from 'date-fns';
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
    Vue: undefined,
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
    EnumList(enumName, value) {
        const enumeration = enumsMap[enumName];
        if (!enumeration)
            return [];
        else
            return Object.keys(enumeration).map((key) => ({ text: enumeration[key], value: key }));
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
        return utils.Vue.set(arr, index, item);
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
     * 将某个对象所有字段置为空，一般用于 filter
     */
    ClearObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key))
                obj[key] = undefined;
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
    /**
     * 数字格式化
     * @param {digits} 小数点保留个数
     * @param {showGroup} 是否显示千位分割（默认逗号分隔）
    */
    FormatNumber(value, digits, showGroup) {
        if (!value)
            return value;
        if (parseFloat(value) === 0)
            return '0';
        if (isNaN(parseFloat(value)) || isNaN(parseInt(digits)))
            return;
        if (digits !== undefined) {
            value = Number(value).toFixed(parseInt(digits));
        }
        if (showGroup) {
            const temp = ('' + value).split('.');
            const right = temp[1];
            let left = temp[0].split('').reverse().join('').match(/(\d{1,3})/g).join(',').split('').reverse().join('');
            if (temp[0][0] === '-')
                left = '-' + left;
            if (right)
                left = left + '.' + right;
            value = left;
        }
        return '' + value;
    },
    /**
     * 时间差
     * @param {dateTime1} 时间
     * @param {dateTime2} 时间
     * @param {calcType} 计算类型：天数(day)、小时数(hour)、分钟数(minute)、秒数(second)
    */
    DateDiff(dateTime1, dateTime2, calcType) {
        if (!dateTime1 || !dateTime2)
            return;
        if (!isValid(new Date(dateTime1)) || !isValid(new Date(dateTime2)))
            return;
        const map = {
            d: {
                diff: 24 * 60 * 60 * 1000,
                formatter: 'yyyy-MM-dd',
            },
            h: {
                diff: 60 * 60 * 1000,
                formatter: 'yyyy-MM-dd HH:mm',
            },
            m: {
                diff: 60 * 1000,
                formatter: 'yyyy-MM-dd HH:mm',
            },
            s: {
                diff: 1000,
                formatter: 'yyyy-MM-dd HH:mm:ss',
            },
        };
        if (!map[calcType])
            return;
        const config = map[calcType];
        const dateTime1Temp = new Date(format(new Date(dateTime1), config.formatter)).getTime();
        const dateTime2Temp = new Date(format(new Date(dateTime2), config.formatter)).getTime();
        const dateDiff = dateTime2Temp - dateTime1Temp;
        return Math.floor(dateDiff / (config.diff));
    },
};

export default {
    install(Vue, options) {
        utils.Vue = Vue;
        Vue.prototype.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
