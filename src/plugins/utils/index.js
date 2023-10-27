import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import isObject from 'lodash/isObject';
import {
    addDays, subDays, addMonths, formatRFC3339, isValid,
    differenceInYears,
    differenceInQuarters,
    differenceInMonths,
    differenceInWeeks,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
    getDayOfYear, getWeekOfMonth, getQuarter, startOfWeek, getMonth, getWeek, getDate, startOfQuarter,
    addSeconds, addMinutes, addHours, addQuarters, addYears, addWeeks,
    eachDayOfInterval, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday
} from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { dateFormatter } from '@/plugins/Formatters';

const moment = require('moment');
const momentTZ = require('moment-timezone');

import Vue from 'vue';
import { toString, fromString, toastAndThrowError, isDefString, isDefNumber, isDefList, isDefMap, typeDefinitionMap } from '../dataTypes/tools';
import Decimal from 'decimal.js';
import { findAsync, mapAsync, filterAsync, findIndexAsync, sortAsync } from './helper';
import { getAppTimezone, isValidTimezoneIANAString } from './timezone';
let enumsMap = {};

function naslDateToLocalDate(date) {
    const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localDate = momentTZ.tz(date, 'YYYY-MM-DD', localTZ);
    return new Date(localDate.format('YYYY-MM-DD HH:mm:ss'));
}

function convertJSDateInTargetTimeZone(date, tz) {
    return new Date(momentTZ.tz(date, getAppTimezone(tz)).format('YYYY-MM-DD HH:mm:ss.SSS'));
}

function toValue(date, typeKey) {
    if (!date)
        return date;
    if (typeKey === 'format')
        return moment(date).format('YYYY-MM-DD'); // value 的真实格式
    else if (typeKey === 'json')
        return this.JsonSerialize(date);
    else if (typeKey === 'timestamp')
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
    JsonSerialize(v, tz) {
        // 目前入参 v 的类型是 nasl.DateTime、nasl.Date、nasl.Time 时，都是 js 原生 string 类型
        // 只能使用 regex 粗略判断一下
        if (this.isInputValidNaslDateTime(v)) {
            // v3.3 老应用升级的场景，UTC 零时区，零时区展示上用 'Z'，后向兼容
            // v3.4 新应用，使用默认时区时选项，tz 为空
            if (!tz) {
                const d = momentTZ.tz(v, 'UTC').format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';
                return JSON.stringify(d);
            }
            // 新应用，设置为零时区，零时区展示上用 'Z'，后向兼容.
            if (tz === 'UTC') {
                // TODO: 想用 "+00:00" 展示零时区
                const d = momentTZ.tz(v, 'UTC').format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';
                return JSON.stringify(d);
            }
            // 新应用，设置为其他时区
            if (tz) {
                const d = momentTZ.tz(v, getAppTimezone(tz)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
                return JSON.stringify(d);
            }
        } else if (typeof v === 'string' && /^\d{2}:\d{2}:\d{2}$/.test(v)) {
            // test if the input v is a pure time-format string in the form of hh:mm:ss
            return JSON.stringify(v);
        } else if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) {
            // test if the input v is a pure date-format string in the form of yyyy-MM-dd
            return JSON.stringify(v);
        } else {
            return JSON.stringify(v);
        }
    },
    Split(str, seperator) {
        if (Object.prototype.toString.call(str) === '[object String]') {
            return str.split(seperator);
        }
        return [];
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
            return await mapAsync(arr, (elem) => trans(elem));
        } else {
            return null;
        }
    },
    ListSum: (arr) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const nullRemoved = utils.ListFilter(arr, (elem) => elem !== null && elem !== undefined);
        return nullRemoved.length === 0 ? null :
                nullRemoved.reduce((prev, cur) =>
                    // decimal 可解决 0.1 + 0.2 的精度问题，下同
                    new Decimal(cur + '').plus(prev), new Decimal('0')).toNumber();
    },
    ListProduct: (arr) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const nullRemoved = utils.ListFilter(arr, (elem) => elem !== null && elem !== undefined);
        return nullRemoved.length === 0 ? null :
                nullRemoved.reduce((prev, cur) =>
                    new Decimal(cur + '').mul(prev), new Decimal('1')).toNumber();
    },
    ListAverage: (arr) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const nullRemoved = utils.ListFilter(arr, (elem) => elem !== null && elem !== undefined);
        return nullRemoved.length === 0 ? null :
                new Decimal(utils.ListSum(nullRemoved)).div(nullRemoved.length).toNumber();
    },
    ListMax: (arr) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const nullRemoved = utils.ListFilter(arr, (elem) => elem !== null && elem !== undefined);
        return nullRemoved.length === 0 ? null :
                nullRemoved.reduce((prev, cur) => prev >= cur ? prev : cur, nullRemoved[0]);
    },
    ListMin: (arr) => {
        if (!Array.isArray(arr)) {
            return null;
        }
        const nullRemoved = utils.ListFilter(arr, (elem) => elem !== null && elem !== undefined);
        return nullRemoved.length === 0 ? null :
                nullRemoved.reduce((prev, cur) => prev <= cur ? prev : cur, nullRemoved[0]);
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
        const sortRule = (valueA, valueB) => {
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
        };
        if (Array.isArray(arr)) {
            if (typeof callback === 'function') {
                return await sortAsync(arr, sortRule)(callback);
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
    ListFilter: (arr, by) => {
        if (!Array.isArray(arr) || typeof by !== 'function') {
            return null;
        }
        return arr.filter(by);
    },
    ListFilterAsync: async (arr, by) => {
        if (!Array.isArray(arr) || typeof by !== 'function') {
            return null;
        }
        return await filterAsync(arr, by);
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
                return await findIndexAsync(arr, callback);
            }
        }
    },
    ListSlice(arr, start, end) {
        // 由于 slice 的特性，end 要校验的是长度，而不是下标，所以要减 1
        if (isArrayOutBounds(arr, start) && isArrayOutBounds(arr, end - 1)) {
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
    async ListDistinctByAsync(arr, listGetVal) {
        // getVal : <A,B> . A => B 给一个 A 类型的数据，返回 A 类型中被用户选中的 field 的 value
        // listGetVal: getVal 这样的函数组成的 list

        if (!Array.isArray(arr)) {
            return null;
        }
        // item => List[item.userName, item.id]
        if (arr.length === 0) {
            return arr;
        }

        const res = [];
        const vis = new Set();
        for (const item of arr) {
            // eslint-disable-next-line no-return-await
            const hashArr = listGetVal.map(async (fn) => await fn(item));
            // eslint-disable-next-line no-await-in-loop
            const hash = (await Promise.all(hashArr)).join('');
            if (!vis.has(hash)) {
                vis.add(hash);
                res.push(item);
            }
        }
        return res;
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
            return arr;
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
        return res;
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
        return res;
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
            return null;
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
        return res;
    },
    CurrDate(tz) {
        if (!tz) {
            return this.CurrDate('global');
        }
        const localDate = convertJSDateInTargetTimeZone(new Date(), tz);
        return moment(localDate).format('YYYY-MM-DD');
    },
    CurrTime(tz) {
        if (!tz) {
            return this.CurrTime('global');
        }
        const localDate = convertJSDateInTargetTimeZone(new Date(), tz);
        return moment(localDate).format('HH:mm:ss');
    },
    CurrDateTime(tz) {
        // 函数签名用的是 Date 原生对象不是 string，所以先这样就行
        return new Date();
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
    GetDateCount(datetr, metric, tz) {
        let date;
        if (this.isInputValidNaslDateTime(datetr) && !tz) {
            // v3.3 老应用升级的场景，使用全局配置（全局配置一般默认是‘用户时区’）
            // v3.4 新应用，使用默认时区时选项，tz 为空
            date = convertJSDateInTargetTimeZone(datetr, getAppTimezone('global'));
        } else if (this.isInputValidNaslDateTime(datetr) && tz) {
            // v3.4 新应用，指定了默认值之外的时区选项，必然有时区参数 tz
            date = convertJSDateInTargetTimeZone(datetr, tz);
        } else {
            // 针对 nasl.Date 类型
            date = naslDateToLocalDate(datetr);
        }

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
    isInputValidNaslDateTime(inp) {
        return inp instanceof Date
            || /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/.test(inp)
            || /^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/.test(inp);
    },
    GetSpecificDaysOfWeek(startdatetr, enddatetr, arr, tz) {
        if (!startdatetr)
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：startDate不能为空`);
        if (!enddatetr)
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：endDate不能为空`);
        if (!Array.isArray(arr)) {
            toastAndThrowError(`内置函数GetSpecificDaysOfWeek入参错误：参数“指定”非合法数组`);
        }

        let startDate;
        let endDate;
        if (this.isInputValidNaslDateTime(startdatetr) && !tz) {
            // v3.3 老应用升级的场景，使用全局配置（全局配置一般默认是‘用户时区’）
            // v3.4 新应用，使用默认时区时选项，tz 为空
            startDate = convertJSDateInTargetTimeZone(startdatetr, getAppTimezone('global'));
            endDate = convertJSDateInTargetTimeZone(enddatetr, getAppTimezone('global'));
        } else if (this.isInputValidNaslDateTime(startdatetr) && tz) {
            // v3.4 新应用，指定了默认值之外的时区选项，必然有时区参数 tz
            startDate = convertJSDateInTargetTimeZone(startdatetr, getAppTimezone(tz));
            endDate = convertJSDateInTargetTimeZone(enddatetr, getAppTimezone(tz));
        } else {
            // 针对 nasl.Date 类型
            startDate = naslDateToLocalDate(startdatetr);
            endDate = naslDateToLocalDate(enddatetr);
        }

        if (startDate > endDate) {
            return [];
        }

        const fns = [isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday];
        const dateInRange = eachDayOfInterval({ start: startDate, end: endDate });
        const isDays = fns.filter((_, index) => arr.includes((index + 1)));
        const filtereddate = dateInRange.filter((day) => isDays.some((fn) => fn(day)));
        if (typeof startdatetr === 'object' || startdatetr.includes('T')) {
            return filtereddate.map((date) => moment(date).format('YYYY-MM-DD HH:mm:ss'));
        } else {
            return filtereddate.map((date) => moment(date).format('YYYY-MM-DD'));
        }
    },
    AlterDateTime(datetring, option, count, unit) {
        const date = new Date(datetring);
        const amount = option === 'Increase' ? count : -count;
        let addDate;
        switch (unit) {
            case 'second': addDate = addSeconds(date, amount); break;
            case 'minute': addDate = addMinutes(date, amount); break;
            case 'hour': addDate = addHours(date, amount); break;
            case 'day': addDate = addDays(date, amount); break;
            case 'week': addDate = addWeeks(date, amount); break;
            case 'month': addDate = addMonths(date, amount); break;
            case 'quarter': addDate = addQuarters(date, amount); break;
            case 'year': addDate = addYears(date, amount); break;
        }
        if (typeof datetring === 'object' || datetring.includes('T')) {
            return moment(addDate).format('YYYY-MM-DD HH:mm:ss');
        } else {
            return moment(addDate).format('YYYY-MM-DD');
        }
    },
    FormatDate(value, formatter) {
        if (!value) {
            return '-';
        }
        return dateFormatter.format(naslDateToLocalDate(value), formatter);
    },
    FormatDateTime(value, formatter, tz) {
        if (!value) {
            return '-';
        }
        if (!tz) {
            return this.FormatDateTime(value, formatter, 'global');
        }
        const date = convertJSDateInTargetTimeZone(value, tz);
        return dateFormatter.format(date, formatter);
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
            if (typeAnnotation.typeName === 'DateTime') {
                return formatRFC3339(new Date(value));
            } else if (typeAnnotation.typeName === 'Date')
                return moment(new Date(value)).format('YYYY-MM-DD');
            else if (typeAnnotation.typeName === 'Time') {
                if (/^\d{2}:\d{2}:\d{2}$/.test(value)) // 纯时间 12:30:00
                    return moment(new Date('2022-01-01 ' + value)).format('HH:mm:ss');
                else
                    return moment(new Date(value)).format('HH:mm:ss');
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
    ToString(typeKey, value, tz) {
        // v3.3 老应用升级的场景，使用全局配置（全局配置一般默认是‘用户时区’）
        // v3.4 新应用，使用默认时区时选项，tz 为空
        if (typeKey === 'nasl.core.DateTime' && !tz) {
            return toString(typeKey, value, 'global');
        } else {
            // v3.4 新应用，指定了默认值之外的时区选项，必然有时区参数 tz
            return toString(typeKey, value, getAppTimezone(tz));
        }
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
    ConvertTimezone(dateTime, tz) {
        if (!dateTime) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：指定日期为空`);
        }
        if (!isValid(new Date(dateTime))) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：指定日期不是合法日期类型`);
        }
        if (!isValidTimezoneIANAString(tz)) {
            toastAndThrowError(`内置函数ConvertTimezone入参错误：传入时区${tz}不是合法时区字符`);
        }
        return formatInTimeZone(dateTime, tz, "yyyy-MM-dd'T'HH:mm:ssxxx");
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

            if (['nasl.core.Null'].includes(typeKey) || value === undefined || value === null) {
                return false;
            } else if (['nasl.core.Boolean'].includes(typeKey) || value === true || value === false) {
                return true;
            } else if (isDefString(typeKey)) {
                return value.trim() !== '';
            } else if (isDefNumber(typeKey)) {
                return !isNaN(value);
            } else if (isDefList(typeDefinition)) {
                return value && value.length > 0;
            } else if (isDefMap(typeDefinition)) {
                return Object.keys(value).length > 0;
            } else if (typeof value === 'string') {
                return value.trim() !== '';
            } else if (typeof value === 'number') {
                return !isNaN(value);
            } else if (Array.isArray(value)) {
                return value && value.length > 0;
            } else {
                // structure/entity
                return !Object.keys(value).every((key) => {
                    const v = value[key];
                    return v === null || v === undefined;
                });
            }
        };

        let isValid = true;

        for (let i = 0; i < values.length; i += 1) {
            const { value, type } = values[i] || {};

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
        window.$utils = utils;
        enumsMap = options.enumsMap;
    },
};
