import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import isObject from 'lodash/isObject';
import { utils as cutils } from 'cloud-ui.vusion';
import {
    addDays, subDays, addMonths, format, formatRFC3339, isValid,
    differenceInYears,
    differenceInQuarters,
    differenceInMonths,
    differenceInWeeks,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
    getDayOfYear, getWeekOfMonth, getQuarter, startOfWeek, getMonth, getWeek, getDate, startOfQuarter,
    addSeconds, addMinutes, addHours, addQuarters, addYears, addWeeks, formatISO,
    eachDayOfInterval, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday, parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import Vue from 'vue';
import { toString, fromString, toastAndThrowError, isDefString, isDefNumber, isDefList, isDefMap, typeDefinitionMap } from '../dataTypes/tools';
import Decimal from 'decimal.js';
import { findAsync, mapAsync, filterAsync, findIndexAsync, sortAsync } from './helper';
import { getAppTimezone, isValidTimezoneIANAString } from './timezone';
let enumsMap = {};

const appTimezone = getAppTimezone();
console.log('appTimezone: ', appTimezone); // 便于排查问题

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
function isArrayOutBounds(arr, index) {
    if (!Array.isArray(arr))
        toastAndThrowError('传入内容不是数组');
    if (typeof index !== 'number' || isNaN(index)) {
        toastAndThrowError('传入下标不是数字');
    }
    // 传入要找的下标，大于数组长度
    if ((index + 1) > arr.length) {
        toastAndThrowError(`列表访问越界，访问下标 ${index}，列表长度 ${arr.length}`);
    }
    return true;
}

export const utils = {
    Vue: undefined,
    EnumValueToText(value, enumTypeAnnotation) {
        const { typeName, typeNamespace } = enumTypeAnnotation || {};
        if (typeName) {
            let enumName = typeName;
            if (typeNamespace?.startsWith('extensions')) {
                enumName = typeNamespace + '.' + enumName;
            }
            if (enumsMap[enumName]) {
                return enumsMap[enumName][value];
            }
            return '';
        }
        return '';
    },
    StringToEnumValue(value, enumTypeAnnotation) {
        const { typeName, typeNamespace } = enumTypeAnnotation || {};
        if (typeName) {
            let enumName = typeName;
            if (typeNamespace?.startsWith('extensions')) {
                enumName = typeNamespace + '.' + enumName;
            }
            if (enumsMap[enumName] && enumsMap[enumName].hasOwnProperty(value)) {
                return value;
            }
            return null;
        }
        return null;
    },
    EnumToList(enumTypeAnnotation) {
        const { typeName, typeNamespace } = enumTypeAnnotation || {};
        let enumName = typeName;
        if (typeName && typeNamespace?.startsWith('extensions')) {
            enumName = typeNamespace + '.' + enumName;
        }
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
    Concat(...arr) {
        return arr.join('');
    },
    Length(str1) {
        if (isObject(str1)) {
            return Object.keys(str1).length;
        }
        if (typeof str1 !== 'undefined' && str1 !== null && typeof str1.length !== 'undefined') {
            return str1.length;
        }
        return null;
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
        if (isArrayOutBounds(arr, index)) {
            return arr[index];
        }
    },
    Set(arr, index, item) {
        if (isArrayOutBounds(arr, index)) {
            return utils.Vue.set(arr, index, item);
        }
    },
    Contains(arr, item) {
        return typeof arr.find((ele) => isEqual(ele, item)) !== 'undefined';
    },
    Add(arr, item) {
        if (Array.isArray(arr)) {
            arr.push(item);
        }
    },
    AddAll(arr, addList) {
        if (Array.isArray(arr) && Array.isArray(addList)) {
            arr.push(...addList);
            return arr.length;
        }
    },
    Insert(arr, index, item) {
        if (isArrayOutBounds(arr, index)) {
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
        if (isArrayOutBounds(arr, index)) {
            return arr.splice(index, 1)[0];
        }
    },
    ListHead(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        } else {
            return arr[0];
        }
    },
    ListLast(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        } else {　
            return arr[arr.length - 1];
        }
    },
    ListFlatten(arr) {
        if (Array.isArray(arr) && arr.every((elem) => Array.isArray(elem))) {
            return arr.flat();
        } else {
            return null;
        }
    },
    ListTransform(arr, trans) {
        if (Array.isArray(arr)) {
            return arr.map((elem) => trans(elem));
        } else {
            return null;
        }
    },
    async ListTransformAsync(arr, trans) {
        if (Array.isArray(arr)) {
            return await mapAsync(arr, (elem) => trans(elem))
        } else {
            return null
        }
    },
    ListSum(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            return arr.reduce((prev, cur) => prev + cur, 0);
        } else {
            return null;
        }
    },
    ListProduct(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            return arr.reduce((prev, cur) => prev * cur, 1);
        } else {
            return null;
        }
    },
    ListAverage(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        } else {
            return this.ListSum(arr) / arr.length;
        }
    },
    ListMax(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        } else {
            return arr.reduce((prev, cur) => prev >= cur ? prev : cur, arr[0]);
        }
    },
    ListMin(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        } else {
            return arr.reduce((prev, cur) => prev <= cur ? prev : cur, arr[0]);
        }
    },
    ListReverse(arr) {
        if (Array.isArray(arr)) {
            arr.reverse();
        }
    },
    ListSort(arr, callback, sort) {
        if (Array.isArray(arr)) {
            if (typeof callback === 'function') {
                arr.sort((a, b) => {
                    const valueA = callback(a);
                    const valueB = callback(b);
                    if (Number.isNaN(valueA) || Number.isNaN(valueB) || typeof valueA === 'undefined' || typeof valueB === 'undefined' || valueA === null || valueB === null) {
                        return 1;
                    } else {
                        if (valueA >= valueB) {
                            if (sort) {
                                return 1;
                            }
                            return -1;
                        } else {
                            if (sort) {
                                return -1;
                            }
                            return 1;
                        }
                    }
                });
            }
        }
    },
    async ListSortAsync(arr, callback, sort) {
        if (Array.isArray(arr)) {
            if (typeof callback === 'function') {
                sortAsync(arr, async (a, b) => {
                    const valueA = await callback(a);
                    const valueB = await callback(b);
                    if (Number.isNaN(valueA) || Number.isNaN(valueB) || typeof valueA === 'undefined' || typeof valueB === 'undefined' || valueA === null || valueB === null) {
                        return 1
                    } else {
                        if (valueA >= valueB) {
                            if (sort) {
                                return 1
                            }
                            return -1
                        } else {
                            if (sort) {
                                return -1
                            }
                            return 1
                        }
                    }
                })
            } 
        }
    },
    ListFind(arr, by) {
        if (Array.isArray(arr)) {
            if (typeof by === 'function') {
                const value = arr.find(by);
                return (typeof value === 'undefined') ? null : value;
            }
        }
    },
    async ListFindAsync(arr, by) {
        if (Array.isArray(arr)) {
            if (typeof by === 'function') {
                const value = await findAsync(arr, by);
                return (typeof value === 'undefined') ? null : value;
            } 
        }
    },
    ListFilter(arr, by) {
        if (!Array.isArray(arr) || typeof by !== 'function') {
            return null;
        }
        return arr.filter(by);
    },
    async ListFilterAsync(arr, by) {
        if (!Array.isArray(arr) || typeof by !== 'function') {
            return null
        }
        return await filterAsync(arr, by)
    },
    ListFindIndex(arr, callback) {
        if (Array.isArray(arr)) {
            if (typeof callback === 'function') {
                return arr.findIndex(callback);
            }
        }
    },
    async ListFindIndexAsync(arr, callback) {
        if (Array.isArray(arr)) {
            if (typeof callback === 'function') {
                return await findIndexAsync(arr, callback)
            }
        }
    },
    ListSlice(arr, start, end) {
        if (isArrayOutBounds(arr, start) && isArrayOutBounds(arr, end)) {
            return arr.slice(start, end);
        }
    },
    ListDistinct(arr) {
        if (Array.isArray(arr)) {
            const map = new Map();
            let i = 0;
            while (i < arr.length) {
                if (map.get(arr[i])) {
                    arr.splice(i, 1);
                    i--;
                } else {
                    map.set(arr[i], true);
                }
                i++;
            }
        }
    },
    // 随着 PageOf 失效，可删除
    ListSliceToPageOf(arr, page, size) {
        if (Array.isArray(arr) && page) {
            const content = arr.slice((page - 1) * size, size);
            const total = arr.length;
            const totalPages = Math.ceil(total / size);
            return {
                content,
                number: page,
                size,
                numberOfElements: content.length,
                totalPages,
                totalElements: total,
                last: page === totalPages,
                first: page === 1,
                empty: total,
            };
        }
    },
    SliceToListPage(arr, page, size) {
        if (Array.isArray(arr) && page) {
            const list = arr.slice((page - 1) * size, size);
            const total = arr.length;
            return { list, total };
        } else {
            return { list: [], total: 0 };
        }
    },
    // 不修改原 list，返回新 list
    ListDistinctBy(arr, getVal) {
        // getVal : <A,B> . A => B 给一个 A 类型的数据，返回 A 类型中被用户选中的 field 的 value
        if (!Array.isArray(arr) || typeof getVal !== 'function') {
            return null;
        }
        if (arr.length === 0) {
            return arr;
        }

        const res = [];
        const vis = new Set();
        for (const item of arr) {
            const hash = getVal(item);
            if (!vis.has(hash)) {
                vis.add(hash);
                res.push(item);
            }
        }
        return res;
    },
    async ListDistinctByAsync(arr, getVal) {
        // getVal : <A,B> . A => B 给一个 A 类型的数据，返回 A 类型中被用户选中的 field 的 value
        if (!Array.isArray(arr) || typeof getVal !== 'function') {
            return null
        }
        if (arr.length === 0) {
            return arr
        }

        const res = [];
        const vis = new Set();
        for (const item of arr) {
            const hash = await getVal(item);
            if (!vis.has(hash)) {
                vis.add(hash);
                res.push(item);
            }
        }
        return res
    },
    ListGroupBy(arr, getVal) {
        // getVal : <A,B> . A => B 给一个 A 类型的数据，返回 A 类型中被用户选中的 field 的 value
        if (!arr || typeof getVal !== 'function') {
            return null;
        }
        if (arr.length === 0) {
            return arr;
        }
        const res = {};
        arr.forEach((e) => {
            const val = getVal(e);
            if (res[val]) {
                // res.get(val) 是一个 array
                res[val].push(e);
            } else {
                res[val] = [e];
            }
        });
        return res;
    },
   async ListGroupByAsync(arr, getVal) {
        // getVal : <A,B> . A => B 给一个 A 类型的数据，返回 A 类型中被用户选中的 field 的 value
        if (!arr || typeof getVal !== 'function') {
            return null;
        }
        if (arr.length === 0) {
            return arr
        }
        const res = {};
        for (let i = 0; i < arr.length; i++) {
            const e = arr[i];
            const val = await getVal(e);
            if (Array.isArray(res[val])) {
                // res.get(val) 是一个 array
                res[val].push(e);
            } else {
                res[val] = [e];
            }
        }
        return res
    },
    MapGet(map, key) {
        if (isObject(map)) {
            const value = map[key];
            return (typeof value === 'undefined') ? null : value;
        }
    },
    MapPut(map, key, value) {
        if (isObject(map)) {
            Vue.prototype.$set(map, key, value);
        }
    },
    MapRemove(map, key) {
        if (isObject(map)) {
            utils.Vue.delete(map, key);
        }
    },
    MapContains(map, key) {
        if (isObject(map)) {
            return key in map;
        }
        return false;
    },
    MapKeys(map) {
        if (isObject(map)) {
            return Object.keys(map);
        }
        return 0;
    },
    MapValues(map) {
        if (!isObject(map)) {
            return [];
        }
        if ('values' in Object) {
            return Object.values(map);
        } else {
            const res = [];
            for (const key in map) {
                if (Object.hasOwnProperty.call(map, key)) {
                    res.push(map[key]);
                }
            }
            return res;
        }
    },
    MapFilter(map, by) {
        if (!isObject(map) || typeof by !== 'function') {
            return null;
        }
        const res = {};
        for (const [k, v] of Object.entries(map)) {
            if (by(k, v)) {
                res[k] = v;
            }
        }
        return res;
    },
    async MapFilterAsync(map, by) {
        if (!isObject(map) || typeof by !== 'function') {
            return null;
        }
        const res = {};
        for (const [k, v] of Object.entries(map)) {
            if (await by(k, v)) {
                res[k] = v;
            }
        }
        return res
    },
    MapTransform(map, toKey, toValue) {
        if (!isObject(map) || typeof toKey !== 'function' || typeof toValue !== 'function') {
            return null;
        }
        const res = {};
        for (const [k, v] of Object.entries(map)) {
            res[toKey(k, v)] = toValue(k, v);
        }
        return res;
    },
    async MapTransformAsync(map, toKey, toValue) {
        if (!isObject(map) || typeof toKey !== 'function' || typeof toValue !== 'function') {
            return null
        }
        const res = {};
        for (const [k, v] of Object.entries(map)) {
            res[await toKey(k, v)] = await toValue(k, v);
        }
        return res;
    },
    ListToMap(arr, toKey, toValue) {
        if (!Array.isArray(arr) || typeof toKey !== 'function' || typeof toValue !== 'function') {
            return null;
        }
        const res = {};
        for (let i = arr.length - 1; i >= 0; i--) {
            const e = arr[i];
            if (toKey(e) !== undefined) {
                res[toKey(e)] = toValue(e);
            }
        }

        return res;
    },
    async ListToMapAsync(arr, toKey, toValue) {
        if (!Array.isArray(arr) || typeof toKey !== 'function' || typeof toValue !== 'function') {
            return null;
        }
        const res = {};
        for (let i = arr.length - 1; i >= 0; i--) {
            const e = arr[i];
            const key = await toKey(e);
            if (key !== undefined) {
                res[key] = await toValue(e);
            }
        }
        return res
    },
    CurrDate() {
        const date = parseISO(this.ConvertTimezone(new Date(), appTimezone));
        return format(date, 'yyy-MM-dd');
    },
    CurrTime() {
        const date = parseISO(this.ConvertTimezone(new Date(), appTimezone));
        return format(date, 'HH:mm:ss');
    },
    CurrDateTime() {
        return this.ConvertTimezone(new Date(), appTimezone);
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
    GetDateCount(dateString, metric) {
        const date = parseISO(this.ConvertTimezone(new Date(dateString), appTimezone));

        const [metric1, metric2] = metric.split('-');
        // 获取当年的最后一天的所在周会返回1，需要额外判断一下
        function getCurrentWeek(value) {
            let count = getWeek(value, { weekStartsOn: 1 });
            if (value.getMonth() + 1 === 12 && count === 1) {
                count = getWeek(addDays(value, -7), { weekStartsOn: 1 }) + 1;
            }
            return count;
        }
        switch (metric1) {
            case 'day':
                switch (metric2) {
                    case 'week': return differenceInDays(date, startOfWeek(date, { weekStartsOn: 1 })) + 1;
                    case 'month': return getDate(date);
                    case 'quarter': return differenceInDays(date, startOfQuarter(date)) + 1;
                    case 'year': return getDayOfYear(date);
                }
            case 'week':
                switch (metric2) {
                    case 'month': return getWeekOfMonth(date);
                    case 'quarter': return getCurrentWeek(date) - getWeek(startOfQuarter(date)) + 1;
                    case 'year': return getCurrentWeek(date);
                }
            case 'month':
                switch (metric2) {
                    case 'quarter': return getMonth(date) + 1 - (getQuarter(date) - 1) * 3;
                    case 'year': return getMonth(date) + 1;
                }
            case 'quarter':
                return getQuarter(date);
            default:
                return null;
        }
    },
    AlterDateTime(dateString, option, count, unit) {
        const date = new Date(dateString);
        const amount = option === 'Increase' ? count : -count;
        switch (unit) {
            case 'second': return addSeconds(date, amount);
            case 'minute': return addMinutes(date, amount);
            case 'hour': return addHours(date, amount);
            case 'day': return addDays(date, amount);
            case 'week': return addWeeks(date, amount);
            case 'month': return addMonths(date, amount);
            case 'quarter': return addQuarters(date, amount);
            case 'year': return addYears(date, amount);
        }
    },
    GetSpecificDaysOfWeek(startDateString, endDateString, arr) {
        if (!startDateString)
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：startDate不能为空`);
        if (!endDateString)
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：endDate不能为空`);
        if (!Array.isArray(arr)) {
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：参数“指定”非合法数组`);
        }

        const startDate = utcToZonedTime(parseISO(startDateString), appTimezone);
        const endDate = utcToZonedTime(parseISO(endDateString), appTimezone);
        const fns = [isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday];
        const datesInRange = eachDayOfInterval({ start: startDate, end: endDate });
        const isDays = fns.filter((_, index) => arr.includes((index + 1)));
        const filteredDates = datesInRange.filter((day) => isDays.some((fn) => fn(day)));
        if (typeof startDateString === 'object' || startDateString.includes('T')) {
            return filteredDates.map((date) => format(date, 'yyyy-MM-dd HH:mm:ss'));
        } else {
            return filteredDates.map((date) => format(date, 'yyyy-MM-dd'));
        }
    },
    FormatDate(value, formatter) {
        if (!value)
            return '-';
        return cutils.dateFormatter.format(value, formatter);
    },
    FormatDateTime(value, formatter) {
        if (!value)
            return '-';

        const date = this.ConvertTimezone(value, appTimezone);
        return cutils.dateFormatter.format(date, formatter);
    },
    Clone(obj) {
        return cloneDeep(obj);
    },
    New(obj) {
        return utils.Vue.prototype.$genInitFromSchema(obj);
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
                    obj[key] = null;
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
            else if (typeAnnotation.typeName === 'Double' || typeAnnotation.typeName === 'Decimal') // 小数 或者精确小数
                return parseFloat(+value);
            else if (typeAnnotation.typeName === 'Integer' || typeAnnotation.typeName === 'Long')
                // 日期时间格式特殊处理; 整数： format 'int' ; 长整数: format: 'long'
                return /^\d{4}-\d{2}-\d{2}(.*)+/.test(value) ? new Date(value).getTime() : Math.round(+value);
            else if (typeAnnotation.typeName === 'Boolean') // 布尔值
                return !!value;
        }
        return value;
    },
    ToString(value, typeKey) {
        return toString(value, typeKey);
    },
    FromString(value, typeKey) {
        return fromString(value, typeKey);
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
     * @param {calcType} 计算类型：年(y)、季度(q)、月(M)、星期(w)、天数(d)、小时数(h)、分钟数(m)、秒数(s)
    */
    DateDiff(dateTime1, dateTime2, calcType, isAbs = true) {
        if (!dateTime1)
            toastAndThrowError(`内置函数DateDiff入参错误：dateTime1不能为空`);
        if (!dateTime2)
            toastAndThrowError(`内置函数DateDiff入参错误：dateTime2不能为空`);
        // Time
        const timeReg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
        if (timeReg.test(dateTime1) && timeReg.test(dateTime2)) {
            dateTime1 = `1970-01-01 ${dateTime1}`;
            dateTime2 = `1970-01-01 ${dateTime2}`;
        }
        if (!isValid(new Date(dateTime1)) || !isValid(new Date(dateTime2)))
            return;
        const map = {
            y: differenceInYears,
            q: differenceInQuarters,
            M: differenceInMonths,
            w: differenceInWeeks,
            d: differenceInDays,
            h: differenceInHours,
            m: differenceInMinutes,
            s: differenceInSeconds,
        };
        if (!map[calcType])
            return;
        const method = map[calcType];
        const diffRes = method(new Date(dateTime2), new Date(dateTime1));
        return isAbs ? Math.abs(diffRes) : diffRes;
    },
    // 时区转换
    ConvertTimezone(dateTime, timezone) {
        if (!dateTime) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：指定日期为空`);
        }
        if (!isValid(new Date(dateTime))) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：指定日期不是合法日期类型`);
        }
        if (!isValidTimezoneIANAString(timezone)) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：传入时区${timezone}不是合法时区字符`);
        }

        return formatISO(utcToZonedTime(dateTime, timezone));
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
    // 随着 PageOf 失效，可删除
    /**
     * List<T> 转换为 PageOf<T>
     * @param {List<T>} list 集合
     * @param {number} page 页数
     * @param {number} size 每页条数
     * @param {number} total 总数
     * @returns {PageOf<T>}
     */
    CreatePageOf(list, page, size, total) {
        const totalPages = Math.ceil(total / size);
        return {
            content: list,
            number: page,
            size,
            numberOfElements: list.length,
            totalPages,
            totalElements: total,
            last: page === totalPages,
            first: page === 1,
            empty: total,
        };
    },
    /**
     * List<T> 转换为 { list: List<T>, total: Integer }
     * @param {List<T>} list 集合
     * @param {number} total 总数
     * @returns {list: List<T>, total: Integer}
     */
    CreateListPage(list, total) {
        return { list, total };
    },
    /**
     * @param {number} value 内容
     * @param {string} mode 方式
     * @returns {number} 返回值
     */
    Round(value, mode) {
        const modeMap = {
            TowardsZero: Decimal.ROUND_DOWN,
            TowardsInfinity: Decimal.ROUND_UP,
            HalfUp: Decimal.ROUND_HALF_UP,
        };
        return new Decimal(value).toFixed(0, modeMap[mode]);
    },
    /**
     * 空值判断（与）
     * @param {Object[]} values 值
     * @returns {boolean} 返回值
     */
    HasValue(...values) {
        const hasValue = (value, typeKey) => {
            const typeDefinition = typeDefinitionMap[typeKey] || {};

            if (['nasl.core.Null'].includes(value) || value === undefined || value === null) {
                return false;
            } else if (['nasl.core.Boolean'].includes(value) || value === true || value === false) {
                return true;
            } else if (isDefString(typeKey) || typeof value === 'string') {
                return value.trim() !== '';
            } else if (isDefNumber(typeKey) || typeof value === 'number') {
                return !isNaN(value);
            } else if (isDefList(typeDefinition) || Array.isArray(value)) {
                return value && value.length > 0;
            } else if (isDefMap(typeDefinition)) {
                return Object.keys(value).length > 0;
            } else { // structure/entity
                return !Object.keys(value).every((key) => {
                    const v = value[key];
                    return v === null || v === undefined;
                });
            }
        };

        let isValid = true;

        for (let i = 0; i < values.length; i += 1) {
            const { value, type } = values[i];

            if (!hasValue(value, type)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    },
};

export default {
    install(Vue, options) {
        utils.Vue = Vue;
        Vue.prototype.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
