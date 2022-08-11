import cloneDeep from 'lodash/cloneDeep';
import isObject from 'lodash/isObject';
import isEqual from 'lodash/isEqual';
import { utils as cutils } from 'cloud-ui.vusion';
import { addDays, subDays, addMonths, format, formatRFC3339, isValid } from 'date-fns';
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
        else {
            return Object.keys(enumeration).map((key) => ({ text: enumeration[key], value: key }));
        }
    },
    Split(str, seperator) {
        return str && str.split(seperator);
    },
    Join(arr, seperator) {
        if (Array.isArray(arr)) {
            return arr.join(seperator);
        }
    },
    Concat(str1, str2) {
        if (Array.isArray(str1) && Array.isArray(str2))
            return [].concat(str1, str2);
        else
            return str1 + str2;
    },
    Length(str1) {
        return str1 && str1.length;
    },
    ToLower(str) {
        return str && str.toLowerCase();
    },
    ToUpper(str) {
        return str && str.toUpperCase();
    },
    Trim(str) {
        return str && str.trim();
    },
    Get(arr, index) {
        if (Array.isArray(arr)) {
            return arr[index];
        }
    },
    Set(arr, index, item) {
        return utils.Vue.set(arr, index, item);
    },
    Contains(arr, item) {
        return typeof arr.find((ele) => isEqual(ele, item)) !== 'undefined';
    },
    Add(arr, item) {
        if (Array.isArray(arr)) {
            arr.push(item);
        }
    },
    Insert(arr, index, item) {
        if (Array.isArray(arr)) {
            arr.splice(index, 0, item);
        }
    },
    Remove(arr, item) {
        if (Array.isArray(arr)) {
            const index = arr.indexOf(item);
            ~index && arr.splice(index, 1);
        }
    },
    RemoveAt(arr, index) {
        if (Array.isArray(arr)) {
            return arr.splice(index, 1)[0];
        }
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
     * 将内容置空，array 置为 []; object 沿用 ClearObject 逻辑; 其他置为 undefined
     */
    Clear(obj) {
        if (Array.isArray(obj)) {
            obj.splice(0, obj.length);
        } else if (isObject(obj)) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key))
                    obj[key] = undefined;
            }
        } else {
            obj = undefined;
        }
        return obj;
    },
    /**
     * 保留 ClearObject，兼容老版本，将某个对象所有字段置为空，一般用于 filter
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
        } catch (e) { }

        return result;
    },
    Convert(value, typeAnnotation) {
        if (typeAnnotation && typeAnnotation.typeKind === 'primitive') {
            if (typeAnnotation.typeName === 'DateTime')
                return formatRFC3339(new Date(value));
            else if (typeAnnotation.typeName === 'Date')
                return format(new Date(value), 'yyyy-MM-dd');
            else if (typeAnnotation.typeName === 'Time') {
                if (/^\d{2}:\d{2}:\d{2}$/.test(value)) // 纯时间 12:30:00
                    return format(new Date('2022-01-01 ' + value), 'HH:mm:ss');
                else
                    return format(new Date(value), 'HH:mm:ss');
            } else if (typeAnnotation.typeName === 'String')
                return String(value);
            else if (typeAnnotation.typeName === 'Double') // 小数
                return parseFloat(+value);
            else if (typeAnnotation.typeName === 'Integer' || typeAnnotation.typeName === 'Long')
                // 日期时间格式特殊处理; 整数： format 'int' ; 长整数: format: 'long'
                return /^\d{4}-\d{2}-\d{2}(.*)+/.test(value) ? new Date(value).getTime() : Math.round(+value);
            else if (typeAnnotation.typeName === 'Boolean') // 布尔值
                return !!value;
        }

        return value;
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
    /**
     * 字符串查找
     * @param {string} str 字符串
     * @param {string} search 查找字符串
     * @param {number} fromIndex 开始位置
     * @param {boolean} ignoreCase 是否忽略大小写
     * @returns {number} 查找到的位置，没找到返回-1
     */
    IndexOf(str, search, fromIndex, ignoreCase) {
        if (typeof str !== 'string' || typeof search !== 'string') {
            return -1;
        }
        if (fromIndex === undefined || fromIndex < 0 || fromIndex % 1 !== 0) {
            fromIndex = 0;
        }
        if (ignoreCase) {
            str = str.toLowerCase();
            search = search.toLowerCase();
        }
        return str.indexOf(search, fromIndex);
    },
    /**
     * 倒序字符串查找
     * @param {string} str 字符串
     * @param {string} search 查找字符串
     * @param {boolean} ignoreCase 是否忽略大小写
     * @returns {number} 查找到的位置，没找到返回-1
     */
    LastIndexOf(str, search, ignoreCase) {
        if (typeof str !== 'string' || typeof search !== 'string') {
            return -1;
        }
        if (ignoreCase) {
            str = str.toLowerCase();
            search = search.toLowerCase();
        }
        return str.lastIndexOf(search);
    },
    /**
     * 注意是 ReplaceAll
     * @param {string} str 字符串
     * @param {string} search 查找字符串
     * @param {string} replace 替换字符串
     * @returns {string} 替换后的字符串
     */
    Replace(str, search, replace) {
        if (typeof str !== 'string' || typeof search !== 'string') {
            return str;
        }
        replace = replace.replace(/\$/g, '$$$$');
        return str.replace(new RegExp(search.replace(/([/,!\\^${}[\]().*+?|<>\-&])/g, '\\$&'), 'g'), replace);
    },
    /**
     *
     * @param {string} str 字符串
     * @param {number} start 开始位置
     * @param {number} length 长度
     * @returns {string} 截取后的字符串
     */
    SubString(str, start, length) {
        if (typeof str !== 'string') {
            return str;
        }
        if (start !== undefined && (start < 0 || start % 1 !== 0)) {
            start = 0;
        }
        if (length !== undefined && (length < 0 || length % 1 !== 0)) {
            length = 0;
        }
        return str.substr(start, length);
    },
};

export default {
    install(Vue, options) {
        utils.Vue = Vue;
        Vue.prototype.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
