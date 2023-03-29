import { format, formatISO } from 'date-fns';

function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) { }

    return result;
}

const typeDefinitionMap = new Map();
const typeMap = new Map();

// 生成typeKey
export function genSortedTypeKey(typeAnnotation) {
    const {
        typeKind, typeNamespace, typeName,
        typeArguments, properties,
    } = typeAnnotation || {};
    const typeKeyArr = [];
    if (typeKind === 'union') { // 联合类型
        if (Array.isArray(typeArguments)) {
            // 按返回的每个具体项排序
            const childTypeArgs = typeArguments.map((typeArg) => genSortedTypeKey(typeArg)).sort((name1, name2) => name1 > name2 ? 1 : -1);
            typeKeyArr.push(childTypeArgs.join(' | '));
        }
    } else if (typeKind === 'anonymousStructure') { // 匿名数据结构
        typeKeyArr.push('{');
        if (Array.isArray(properties)) {
            // 按匿名数据结构的key排序
            const childTypeArgs = properties.sort(({ name: name1 }, { name: name2 }) => name1 > name2 ? 1 : -1).map((typeArg) => {
                const { name: typeArgName, typeAnnotation: typeArgTypeAnnotation } = typeArg || {};
                return `${typeArgName}: ${genSortedTypeKey(typeArgTypeAnnotation)}`;
            });
            typeKeyArr.push(childTypeArgs.join(', '));
        }
        typeKeyArr.push('}');
    } else {
        const typeArr = [];
        typeNamespace && typeArr.push(typeNamespace);
        typeName && typeArr.push(typeName);
        const typeKey = typeArr.join('.');
        typeKey && typeKeyArr.push(typeKey);
        if (typeKind === 'generic') {
            typeKeyArr.push('<');
            if (Array.isArray(typeArguments)) {
                // 必须按typeArguments定义的顺序，否则实参位置不对
                const childTypeArgs = typeArguments.map((typeArg) => genSortedTypeKey(typeArg));
                typeKeyArr.push(childTypeArgs.join(', '));
            }
            typeKeyArr.push('>');
        }
    }
    return typeKeyArr.join('');
}

// 生成构造函数
function genConstructor(typeKey, definition) {
    if (typeMap[typeKey]) {
        return typeMap[typeKey];
    } else {
        typeDefinitionMap[typeKey] = definition;
        const { typeKind, typeNamespace, typeName, typeArguments, properties } = definition || {};
        let propList = properties;
        if (
            typeKind === 'generic'
        ) {
            // List和Map属于特殊范型
            if (
                typeNamespace === 'nasl.collection'
                && ['List', 'Map'].includes(typeName)
            ) {
                return;
            }
            const typeArr = [];
            typeNamespace && typeArr.push(typeNamespace);
            typeName && typeArr.push(typeName);
            const genericTypeKey = typeArr.join('.');
            // 范型定义
            const genericDefinition = typeDefinitionMap[genericTypeKey];
            if (genericDefinition) {
                const { typeParams, properties } = genericDefinition || {};
                if (Array.isArray(properties)) {
                    // 用实参替换形参
                    propList = properties.map((property) => {
                        const actualProp = {
                            ...property,
                        };
                        const { typeAnnotation } = property || {};
                        // 类型形参
                        const index = typeParams.findIndex((typeParam) => typeParam?.name === typeAnnotation?.typeName);
                        if (index !== -1) {
                            actualProp.typeAnnotation = typeArguments[index];
                        }
                        return actualProp;
                    });
                }
            }
        }
        let code = `
            const level = params.level;
            const defaultValue = params.defaultValue;
            // 默认值是个对象
            if (defaultValue && Object.prototype.toString.call(defaultValue) === '[object Object]') {
                Object.assign(this, defaultValue);
            }
        `;
        if (Array.isArray(propList)) {
            propList.forEach((property) => {
                const {
                    name: propertyName,
                    typeAnnotation,
                    defaultValue,
                } = property || {};
                const defaultValueType = Object.prototype.toString.call(defaultValue);
                const typeKey = genSortedTypeKey(typeAnnotation);
                const typeDefinition = typeDefinitionMap[typeKey];
                const { concept } = typeDefinition || {};
                let parsedValue = defaultValue;
                // 设置成null，才能同步给后端清除该值，但是null对checkbox组件是一种特殊状态
                if (typeKey === 'nasl.core.Boolean') {
                    parsedValue = defaultValue ?? undefined;
                }
                if (
                    defaultValueType === '[object String]'
                    && (
                        ![
                            'nasl.core.String', 'nasl.core.Text', 'nasl.core.Email',
                        ].includes(typeKey)
                        && concept !== 'Enum'
                        && !['union'].includes(typeKind)
                    )
                ) {
                    // 一些特殊情况，特殊处理成undefined
                    // 1.defaultValue在nasl节点上错误得赋值给了空制符串
                    if ([''].includes(defaultValue)) {
                        parsedValue = undefined;
                    } else {
                        parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
                    }
                }
                if (Object.prototype.toString.call(parsedValue) === '[object String]') {
                    parsedValue = `'${parsedValue}'`;
                }
                const needGenInitFromSchema = typeAnnotation && !['primitive', 'union'].includes(typeAnnotation.typeKind);
                const sortedTypeKey = genSortedTypeKey(typeAnnotation);
                code += `this.${propertyName} = `;
                if (needGenInitFromSchema) {
                    code += `Vue.prototype.$genInitFromSchema('${sortedTypeKey}',`;
                }
                code += `((defaultValue && defaultValue.${propertyName}) === null || (defaultValue && defaultValue.${propertyName}) === undefined) ? ${parsedValue} : defaultValue && defaultValue.${propertyName}`;
                if (needGenInitFromSchema) {
                    code += `, level)`;
                }
                code += `;\n`;
            });
        }
        // eslint-disable-next-line no-new-func
        const fn = Function('params', code);
        typeMap[typeKey] = fn;
        return fn;
    }
}

// 初始化整个应用的构造器
export function initApplicationConstructor(dataTypesMap) {
    if (dataTypesMap) {
        for (const typeKey in dataTypesMap) {
            genConstructor(typeKey, dataTypesMap[typeKey]);
        }
    }
}

// 判断字符串的具体类型
function judgeStrType(str) {
    const regMap = {
        'nasl.core.Date': /^\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,2}$/,
        'nasl.core.Time': /^(\d{1,2})(:\d{1,2})?:(\d{1,2})$/,
        'nasl.core.DateTimeReg': /^\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,2}\s(\d{1,2})(:\d{1,2})?:(\d{1,2})$/,
        'nasl.core.Email': /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    };
    for (const key in regMap) {
        const reg = regMap[key];
        if (reg.test(str)) {
            return key;
        }
    }
}

// 判断 变量 是否属于 类型
export function isInstanceOf(variable, typeKey) {
    const typeConstructor = typeMap[typeKey];
    const typeDefinition = typeDefinitionMap[typeKey];
    const varStr = Object.prototype.toString.call(variable);
    const { concept, typeKind, typeNamespace, typeName, typeArguments } = typeDefinition || {};
    const isPrimitive = isDefPrimitive(typeKey);
    if (typeKind === 'union') {
        let matchedIndex = false;
        if (Array.isArray(typeArguments)) {
            matchedIndex = typeArguments.findIndex((typeArg) => isInstanceOf(variable, genSortedTypeKey(typeArg)));
        }
        return matchedIndex !== -1;
    } else if (concept === 'Enum') { // 枚举
        const { enumItems } = typeDefinition;
        if (Array.isArray(enumItems)) {
            if (varStr === '[object String]') {
                // 当前值在枚举中存在
                const enumItemIndex = enumItems.findIndex((enumItem) => variable === enumItem.value);
                return enumItemIndex !== -1;
            } else if (varStr === '[object Array]') {
                const enumItemIndex = variable.findIndex((varItem) => !isInstanceOf(varItem.value, genSortedTypeKey(typeDefinition)));
                // 当前枚举数组与定义完全匹配
                return enumItemIndex === -1;
            }
        }
    } else if (isPrimitive) { // 基础类型
        if (varStr === '[object String]') {
            const actualStrType = judgeStrType(variable);
            if (actualStrType) {
                return actualStrType === typeKey;
            } else if (
                [
                    'nasl.core.String', 'nasl.core.Text', 'nasl.core.Binary',
                ].includes(typeKey)
            ) {
                return true;
            }
        } else if (
            varStr === '[object Number]'
            && [
                'nasl.core.Integer', 'nasl.core.Long', 'nasl.core.Double',
                'nasl.core.Decimal',
            ].includes(typeKey)
        ) {
            return true;
        } else if (varStr === '[object Boolean]' && typeKey === 'nasl.core.Boolean') {
            return true;
        }
    } else if (
        typeKind === 'generic'
        && typeNamespace === 'nasl.collection'
    ) {
        if (!((typeName === 'List' && varStr === '[object Array]') || (typeName === 'Map' && varStr === '[object Object]'))) {
            return false;
        }
        // 特殊范型List/Map
        let keyChecked = true;
        // 期望的值的类型
        const valueTypeArg = typeName === 'List' ? typeArguments?.[0] : typeArguments?.[1];
        // Map存在key类型校验不通过校验的情况
        if (typeName === 'Map') {
            // 期望的key类型
            const keyTypeArg = typeArguments?.[0];
            for (const key in variable) {
                if (!isInstanceOf(key, genSortedTypeKey(keyTypeArg))) {
                    keyChecked = false;
                }
            }
        }
        // key校验通过，再校验value是否符合
        if (keyChecked) {
            if (typeName === 'List' && Array.isArray(variable)) {
                const failedIndex = variable.findIndex((varItem) => !isInstanceOf(varItem, genSortedTypeKey(valueTypeArg)));
                // 当前数组为空或者与定义完全匹配
                return variable.length === 0 || failedIndex === -1;
            } else if (typeName === 'Map' && variable) {
                let checked = true;
                for (const key in variable) {
                    const varItem = variable[key];
                    if (!isInstanceOf(varItem, genSortedTypeKey(valueTypeArg))) {
                        checked = false;
                    }
                }
                return checked;
            }
        }
    } else if (
        typeConstructor
        && variable instanceof typeConstructor
    ) {
        return true;
    }
    return false;
}

// 类型定义是否属于基础类型
const isDefPrimitive = (typeKey) => [
    'nasl.core.Boolean',
    'nasl.core.Integer',
    'nasl.core.Long',
    'nasl.core.Double',
    'nasl.core.Decimal',
    'nasl.core.String',
    'nasl.core.Text',
    'nasl.core.Binary',
    'nasl.core.Date',
    'nasl.core.Time',
    'nasl.core.DateTime',
    'nasl.core.Email',
].includes(typeKey);

// 类型定义是否属于字符串大类
const isDefString = (typeKey) => [
    'nasl.core.String',
    'nasl.core.Text',
    'nasl.core.Binary',
    'nasl.core.Date',
    'nasl.core.Time',
    'nasl.core.DateTime',
    'nasl.core.Email',
].includes(typeKey);

// 类型定义是否属于数字大类
const isDefNumber = (typeKey) => [
    'nasl.core.Integer',
    'nasl.core.Long',
    'nasl.core.Double',
    'nasl.core.Decimal',
].includes(typeKey);

// 类型定义是否属于数组
const isDefList = (typeDefinition) => {
    const { typeKind, typeNamespace, typeName } = typeDefinition || {};
    return typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List';
};

// 类型定义是否属于Map
const isDefMap = (typeDefinition) => {
    const { typeKind, typeNamespace, typeName } = typeDefinition || {};
    return typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'Map';
};

// 值是否属于基础类型
// 数字（number）、字符串（string）、布尔值（boolean）、undefined、null、对象（Object）
const isValPrimitive = (value) => {
    const typeStr = Object.prototype.toString.call(value);
    return ['[object Boolean]', '[object Number]', '[object String]'].includes(typeStr);
};

/**
 * 判断类型是否匹配
 * @param {*} typeAnnotation 期望类型
 * @param {*} value 值
 */
const isTypeMatch = (typeKey, value) => {
    const isPrimitive = isDefPrimitive(typeKey); // 类型字符串
    const typeAnnotation = typeDefinitionMap[typeKey];
    const isValuePrimitive = isValPrimitive(value); // 类型字符串
    const typeStr = Object.prototype.toString.call(value);
    const { concept } = typeAnnotation || {};
    let isMatch = (isPrimitive === isValuePrimitive) || (concept === 'Enum' && typeStr === '[object String]');
    // 大类型匹配的基础上继续深入判断
    if (isMatch) {
        if (isPrimitive) {
            if (
                typeKey === 'nasl.core.Boolean' && typeStr !== '[object Boolean]'
                || isDefNumber(typeKey) && typeStr !== '[object Number]'
                || isDefString(typeKey) && typeStr !== '[object String]'
            ) {
                isMatch = false;
            }
        }
    }
    return isMatch;
};

/**
 * 初始化变量
 * 基础类型不再进初始化方法
 * @param {*} typeKey
 * @param {*} defaultValue
 * @param {*} parentLevel
 * @returns
 */
export const genInitData = (typeKey, defaultValue, parentLevel) => {
    let level = 1;
    if (parentLevel !== undefined) {
        level = parentLevel + 1;
    }
    const defaultValueType = Object.prototype.toString.call(defaultValue);
    let parsedValue = defaultValue;
    // 设置成null，才能同步给后端清除该值，但是null对checkbox组件是一种特殊状态
    if (typeKey === 'nasl.core.Boolean') {
        parsedValue = defaultValue ?? undefined;
    }
    const typeDefinition = typeDefinitionMap[typeKey];
    const { concept, typeKind, typeNamespace, typeName, typeArguments } = typeDefinition || {};
    if (
        defaultValueType === '[object String]'
        && (
            ![
                'nasl.core.String', 'nasl.core.Text', 'nasl.core.Email',
            ].includes(typeKey)
            && concept !== 'Enum'
            && !['union'].includes(typeKind)
        )
    ) {
        // 一些特殊情况，特殊处理成undefined
        // 1.defaultValue在nasl节点上错误得赋值给了空制符串
        if ([''].includes(defaultValue)) {
            parsedValue = undefined;
        } else {
            parsedValue = tryJSONParse(defaultValue) !== undefined ? tryJSONParse(defaultValue) : defaultValue;
        }
    }
    if (level > 2 && [undefined, null].includes(parsedValue)) {
        return;
    }
    const isTypeMatched = parsedValue === undefined || isTypeMatch(typeKey, parsedValue);
    if (isTypeMatched) {
        if (
            typeKind === 'generic'
            && typeNamespace === 'nasl.collection'
            && ['List', 'Map'].includes(typeName)
        ) { // 特殊范型List/Map
            let initVal = (typeName === 'List' ? [] : {});
            if (parsedValue) {
                // valueTypeAnnotation可能会由于一些情况出现空，因此不能加上对typeArguments数组的整体容错判断
                const valueTypeAnnotation = typeName === 'List' ? typeArguments?.[0] : typeArguments?.[1];
                const sortedTypeKey = genSortedTypeKey(valueTypeAnnotation);
                if (typeName === 'List' && Array.isArray(parsedValue)) {
                    initVal = parsedValue.map((item) => genInitData(sortedTypeKey, item, level));
                } else if (typeName === 'Map') {
                    for (const key in parsedValue) {
                        const val = parsedValue[key];
                        initVal[key] = genInitData(sortedTypeKey, val, level);
                    }
                }
            }
            return initVal;
        }
        if (typeName === 'DateTime' && parsedValue !== undefined) {
            const date = new Date(parsedValue);
            parsedValue = formatISO(date, { format: 'extended', fractionDigits: 3 });
        } else if (typeKey) {
            const TypeConstructor = typeMap[typeKey];
            if (
                TypeConstructor
                && !['primitive', 'union'].includes(typeKind)
                && concept !== 'Enum'
            ) {
                const instance = new TypeConstructor({
                    defaultValue: parsedValue,
                    level,
                });
                return instance;
            }
        }
    }
    if (parsedValue !== undefined) {
        return parsedValue;
    }
};

/**
 * 生成缩进
 * @param tabSize 缩进次数
 * @returns
 */
function indent(tabSize) {
    return ' '.repeat(4 * tabSize);
}

/**
 * 变量转字符串
 * @param {*} variable
 * @param {*} typeKey
 * @param {*} tabSize
 * @returns
 */
export const toString = (variable, typeKey, tabSize = 0) => {
    if (variable instanceof Error) {
        return variable;
    }
    // null 或 undefined 返回 "（空）"
    if ([undefined, null].includes(variable) || typeKey === 'nasl.core.Null') { // 空
        if (tabSize > 0) {
            return '（空）';
        } else {
            return '';
        }
    }
    let str = '';
    const isPrimitive = isDefPrimitive(typeKey);
    if (isPrimitive) { // 基础类型
        str = '' + variable;
        // >=8位有效数字时，按小e
        if (['nasl.core.Double', 'nasl.core.Decimal'].includes(typeKey)) {
            const varArr = str.split('.');
            let count = 0;
            varArr.forEach((varStr) => {
                count += varStr.length;
            });
            const maxLen = 8;
            if (count >= maxLen) {
                // 去掉+是为了跟后端保持统一
                str = variable?.toExponential?.().replace?.('e+', 'e');
            }
        }
        // 日期处理
        if (typeKey === 'nasl.core.Date') {
            str = format(new Date(variable), 'yyyy-MM-dd');
        } else if (typeKey === 'nasl.core.Time') {
            if (/^\d{2}:\d{2}:\d{2}$/.test(variable)) // 纯时间 12:30:00
                str = format(new Date('2022-01-01 ' + variable), 'HH:mm:ss');
            else
                str = format(new Date(variable), 'HH:mm:ss');
        } else if (typeKey === 'nasl.core.DateTime') {
            str = format(new Date(variable), 'yyyy-MM-dd HH:mm:ss');
        }
        if (tabSize > 0) {
            if (['nasl.core.String', 'nasl.core.Text'].includes(typeKey)) {
                const maxLen = 100;
                const moreThanMax = variable.length > maxLen;
                if (moreThanMax) {
                    str = variable.slice(0, maxLen) + '...';
                }
            }
            // 是否属于字符串大类
            if (isDefString(typeKey)) {
                str = `"${str}"`;
            }
        }
    } else {
        const typeDefinition = typeDefinitionMap[typeKey];
        let { concept, typeKind, typeNamespace, typeName, typeArguments, name, properties, enumItems } = typeDefinition || {};
        if (typeKind === 'union') {
            if (Array.isArray(typeArguments) && typeArguments.length) {
                const typeArg = typeArguments.find((typeArg) => isInstanceOf(variable, genSortedTypeKey(typeArg)));
                if (typeArg) {
                    str = toString(variable, genSortedTypeKey(typeArg), tabSize);
                }
            }
        } else if (concept === 'Enum') {
            if (Array.isArray(enumItems) && enumItems.length) {
                const enumItem = enumItems.find((enumItem) => variable === enumItem.value);
                str = enumItem?.label;
            }
        } else if (['TypeAnnotation', 'Structure', 'Entity'].includes(concept)) { // 复合类型
            if (tabSize > 0) {
                str = '';
                if (isDefList(typeDefinition)) {
                    if (variable.length > 0) {
                        str += '[...]';
                    } else {
                        str += '[]';
                    }
                } else if (isDefMap(typeDefinition)) {
                    const keys = Object.keys(variable);
                    if (keys.length > 0) {
                        str += '[... -> ...]';
                    } else {
                        str += '[->]';
                    }
                } else {
                    const keys = Object.keys(variable);
                    if (name) {
                        str += `${name} `;
                    }
                    if (keys.length > 0) {
                        str += '{...}';
                    } else {
                        str += '{}';
                    }
                }
            } else {
                if (typeKind === 'generic' && typeNamespace === 'nasl.collection') {
                    const maxLen = 10;
                    if (typeName === 'List') {
                        const moreThanMax = variable.length > maxLen;
                        const arr = moreThanMax ? variable.slice(0, maxLen) : variable;
                        const itemTypeKey = genSortedTypeKey(typeArguments?.[0]);
                        const arrStr = arr.map((varItem) => toString(varItem, itemTypeKey, tabSize + 1)).join(', ');
                        str = moreThanMax ? `[${arrStr}, ...]` : `[${arrStr}]`;
                    } else if (typeName === 'Map') {
                        const keys = Object.keys(variable);
                        const moreThanMax = keys.length > maxLen;
                        const arr = moreThanMax ? keys : keys.slice(0, maxLen);
                        const keyTypeKey = genSortedTypeKey(typeArguments?.[0]);
                        const itemTypeKey = genSortedTypeKey(typeArguments?.[1]);
                        const arrStr = arr.map((key) => `${indent(tabSize + 1)}${toString(key, keyTypeKey, tabSize + 1)} -> ${toString(variable[key], itemTypeKey, tabSize + 1)}`).join('\n');
                        str = moreThanMax ? `{\n${arrStr}\n...\n}` : `{\n${arrStr}\n}`;
                    }
                } else {
                    // 处理一些范型数据结构的情况
                    if (typeKind === 'generic') {
                        const genericTypeKey = `${typeNamespace}.${typeName}`;
                        const genericTypeDefinition = typeDefinitionMap[genericTypeKey];
                        if (genericTypeDefinition) {
                            name = genericTypeDefinition?.name;
                            const genericProperties = genericTypeDefinition?.properties || [];
                            if (Array.isArray(genericTypeDefinition.typeParams) && genericTypeDefinition.typeParams.length) {
                                const map = {};
                                genericTypeDefinition.typeParams.forEach((typeParam, index) => {
                                    const { name } = typeParam || {};
                                    map[name] = index;
                                });
                                properties = genericProperties.map((genericProperty) => {
                                    let typeAnnotation = genericProperty?.typeAnnotation;
                                    const { typeName } = typeAnnotation || {};
                                    const typeParamIndex = map[typeName];
                                    if (typeParamIndex !== undefined) {
                                        typeAnnotation = typeArguments[typeParamIndex];
                                    }
                                    return {
                                        ...genericProperty,
                                        typeAnnotation,
                                    };
                                });
                            }
                        }
                    }
                    let code = `${indent(tabSize)}`;
                    if (name) {
                        code += `${name} `;
                    }
                    code += '{\n';
                    if (Array.isArray(properties) && properties.length) {
                        code += properties.map((property) => {
                            const { name: propName, typeAnnotation: propTypeAnnotation } = property || {};
                            const propVal = variable[propName];
                            const propTypeKey = genSortedTypeKey(propTypeAnnotation);
                            const propValStr = toString(propVal, propTypeKey, tabSize + 1);
                            return `${indent(tabSize + 1)}${propName}: ${propValStr}`;
                        }).join(',\n');
                    }
                    code += `\n${indent(tabSize)}}`;
                    str = code;
                }
            }
        }
    }
    if (str === '') {
        if (Object.prototype.toString.call(variable) === '[object Object]') {
            if (tabSize > 0) {
                str = '{...}';
            } else {
                str = `{\n`;
                const propStr = [];
                for (const key in variable) {
                    const propVal = variable[key];
                    const propValStr = toString(propVal, undefined, tabSize + 1);
                    propStr.push(`${indent(tabSize + 1)}${key}: ${propValStr}`);
                }
                str += propStr.join(',\n');
                str += `\n}`;
            }
        } else {
            str = '' + variable;
        }
    }
    return str;
};

// yyyy-MM-dd HH:mm:ss
// yyyy/MM/dd HH:mm:ss
// yyyy.MM.dd HH:mm:ss

const DateReg = /(^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$)|(^[1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$)|(^[1-9]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])$)/;
const TimeReg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
const DateTimeReg = /(^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$)|^[1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$|^[1-9]\d{3}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
const FloatNumberReg = /^(-?\d+)(\.\d+)?$/;
// (长)整型
const IntegerReg = /^-?\d+$/;

/**
 * 判断字符串日期是否合法
 * yyyy-MM-dd yyyy/MM/dd HH:mm:ss yyyy.MM.dd 3种格式
 * @param {*} dateString
 * @returns
 */
function isValidDate(dateString, reg) {
    if (!reg.test(dateString)) {
        return false;
    }
    // 验证日期是否真实存在
    const date = new Date(dateString);
    if (date.toString() === 'Invalid Date') {
        return false;
    }
    let splitChar;
    if (dateString.includes('-')) {
        splitChar = '-';
    } else if (dateString.includes('/')) {
        splitChar = '/';
    } else if (dateString.includes('.')) {
        splitChar = '.';
    }
    const [year, month, day] = dateString.split(' ')?.[0]?.split(splitChar).map(Number);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return false;
    }
    return true;
}

export const fromString = (variable, typeKey) => {
    const typeDefinition = typeDefinitionMap[typeKey];
    const isPrimitive = isDefPrimitive(typeKey, isPrimitive);
    const { typeName } = typeDefinition || {};
    // 日期
    if (typeName === 'DateTime' && isValidDate(variable, DateTimeReg)) {
        const date = new Date(variable);
        const outputDate = formatISO(date, { format: 'extended', fractionDigits: 3 });
        return outputDate;
    } else if (typeName === 'Date' && isValidDate(variable, DateReg)) {
        return format(new Date(variable), 'yyyy-MM-dd');
    } else if (typeName === 'Time' && TimeReg.test(variable)) {
        return format(new Date('2022-01-01 ' + variable), 'HH:mm:ss');
    }
    // 浮点数
    else if (['Decimal', 'Double'].includes(typeName) && FloatNumberReg.test(variable)) {
        return parseFloat(+variable);
    }
    // 整数
    else if (['Integer', 'Long'].includes(typeName) && IntegerReg.test(variable)) {
        const maxMap = {
            Integer: 2147483647,
            Long: 9223372036854775807,
        };
        const numberVar = +variable;
        if ((numberVar > 0 && numberVar < maxMap[typeName]) || (numberVar < 0 && numberVar > -maxMap[typeName])) {
            return numberVar;
        }
    }
    // 布尔
    else if (typeName === 'Boolean') {
        if (['true', 'false'].includes(variable)) {
            return JSON.parse(variable);
        }
    }
    throw Error(`${typeName}格式不正确`);
};
