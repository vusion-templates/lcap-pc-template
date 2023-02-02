function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) { }

    return result;
}

const typeMap = new Map();

const typeDefinitionMap = new Map();

// 生成typeKey
export function genTypeKey(typeAnnotation) {
    const {
        typeKind, typeNamespace, typeName,
        typeArguments, properties,
    } = typeAnnotation || {};
    const typeKeyArr = [];
    if (typeKind === 'union') { // 联合类型
        if (Array.isArray(typeArguments)) {
            const childTypeArgs = typeArguments.map((typeArg) => genTypeKey(typeArg));
            typeKeyArr.push(childTypeArgs.join(' | '));
        }
    } else if (typeKind === 'anonymousStructure') { // 匿名数据结构
        typeKeyArr.push('{');
        if (Array.isArray(properties)) {
            const childTypeArgs = properties.map((typeArg) => {
                const { name: typeArgName, typeAnnotation: typeArgTypeAnnotation } = typeArg || {};
                return `${typeArgName}: ${genTypeKey(typeArgTypeAnnotation)}`;
            });
            typeKeyArr.push(childTypeArgs.join(';'));
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
                const childTypeArgs = typeArguments.map((typeArg) => genTypeKey(typeArg));
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
        const { typeKind, typeNamespace, typeName, properties } = definition || {};
        if (
            typeKind === 'generic'
            && typeNamespace === 'nasl.collection'
            && ['List', 'Map'].includes(typeName)
        ) {
            return;
        }
        let fnStr = `
            const level = params.level;
            const defaultValue = params.defaultValue;
            // 默认值是个对象
            if (defaultValue && Object.prototype.toString.call(defaultValue) === '[object Object]') {
                Object.assign(this, defaultValue);
            }
        `;
        if (Array.isArray(properties)) {
            properties.forEach((property) => {
                const {
                    name: propertyName,
                    typeAnnotation,
                    defaultValue,
                } = property || {};
                let parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
                if (Object.prototype.toString.call(parsedValue) === '[object String]') {
                    parsedValue = `'${parsedValue}'`;
                }
                fnStr += `this.${propertyName} = Vue.prototype.$genInitFromSchema(${JSON.stringify(typeAnnotation)}, (defaultValue && defaultValue.${propertyName}) || ${parsedValue}, level);\n`;
            });
        }
        const fn = Function('params', fnStr);
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
        Date: /^\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,2}$/,
        Time: /^(\d{1,2})(:\d{1,2})?:(\d{1,2})$/,
        DateTimeReg: /^\d{1,4}(\/|-)\d{1,2}(\/|-)\d{1,2}\s(\d{1,2})(:\d{1,2})?:(\d{1,2})$/,
        Email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    };
    for (const key in regMap) {
        const reg = regMap[key];
        if (reg.test(str)) {
            return key;
        }
    }
}

// 判断 变量 是否属于 类型
export function isInstanceOf(variable, typeAnnotation) {
    const { typeKind, typeNamespace, typeName, typeArguments } = typeAnnotation;
    const typeKey = genTypeKey(typeAnnotation);
    const typeConstructor = typeMap[typeKey];
    const typeDefinition = typeDefinitionMap[typeKey];
    const varStr = Object.prototype.toString.call(variable);
    if (typeKind === 'primitive') { // 基础类型
        if (varStr === '[object String]') {
            const actualStrType = judgeStrType(variable);
            if (actualStrType) {
                return actualStrType === typeName;
            } else if (['String', 'Text', 'Binary'].includes(typeName)) {
                return true;
            }
        } else if (varStr === '[object Number]' && ['Integer', 'Long', 'Double', 'Decimal'].includes(typeName)) {
            return true;
        } else if (varStr === '[object Boolean]' && typeName === 'Boolean') {
            return true;
        }
    } else if (typeKind === 'generic' && typeNamespace === 'nasl.collection') { // 范型
        let keyChecked = true;
        // 期望的值的类型
        const valueTypeArg = typeName === 'List' ? typeArguments?.[0] : typeArguments?.[1];
        // Map存在key类型校验不通过校验的情况
        if (typeName === 'Map') {
            // 期望的key类型
            const keyTypeArg = typeArguments?.[0];
            for (const key in variable) {
                if ([
                    '__valueInstance',
                    '__valueTypeAnnotation',
                ].includes(key)) {
                    continue;
                }
                if (!isInstanceOf(key, keyTypeArg)) {
                    keyChecked = false;
                }
            }
        }
        // key校验通过，再校验value是否符合
        if (keyChecked) {
            const {
                typeKind: valueTypeArgKind,
                typeArguments: valueTypeArgTypeArgs,
            } = valueTypeArg || {};
            let expectedItemTypeAnnotations = [valueTypeArg];
            // union类型满足一个即可
            if (valueTypeArgKind === 'union') {
                expectedItemTypeAnnotations = valueTypeArgTypeArgs;
            }
            let expectedItemTypeAnnotationIndex = -1;
            if (Array.isArray(expectedItemTypeAnnotations)) {
                expectedItemTypeAnnotationIndex = expectedItemTypeAnnotations.findIndex((expectedItemTypeAnnotation) => {
                    if (expectedItemTypeAnnotation) {
                        if (typeName === 'List' && Array.isArray(variable) && variable.length > 0) {
                            // 数组中不通过的项
                            const failedIndex = variable.findIndex((varItem) => !isInstanceOf(varItem, expectedItemTypeAnnotation));
                            // 当前数组与定义完全匹配
                            return failedIndex === -1;
                        } else if (typeName === 'Map' && variable) {
                            let checked = true;
                            for (const key in variable) {
                                if ([
                                    '__valueInstance',
                                    '__valueTypeAnnotation',
                                ].includes(key)) {
                                    continue;
                                }
                                const varItem = variable[key];
                                if (!isInstanceOf(varItem, expectedItemTypeAnnotation)) {
                                    checked = false;
                                }
                            }
                            return checked;
                        } else {
                            const { __valueInstance, __valueTypeAnnotation } = variable;
                            if (!__valueInstance && __valueTypeAnnotation) {
                                return __valueTypeAnnotation.typeKind === expectedItemTypeAnnotation.typeKind
                                    && __valueTypeAnnotation.typeNamespace === expectedItemTypeAnnotation.typeNamespace
                                    && __valueTypeAnnotation.typeName === expectedItemTypeAnnotation.typeName;
                            } else {
                                return isInstanceOf(__valueInstance, expectedItemTypeAnnotation);
                            }
                        }
                    }
                    return false;
                });
            }
            return expectedItemTypeAnnotationIndex !== -1;
        }
    } else if (typeKind === 'reference' && typeNamespace === 'app.enums' && typeDefinition) { // 枚举
        const { enumItems } = typeDefinition;
        if (Array.isArray(enumItems)) {
            if (varStr === '[object String]') {
                // 当前值在枚举中存在
                const enumItemIndex = enumItems.findIndex((enumItem) => variable === enumItem.value);
                return enumItemIndex !== -1;
            } else if (varStr === '[object Array]') {
                const enumItemIndex = variable.findIndex((varItem) => !isInstanceOf(varItem.value, typeAnnotation));
                // 当前枚举数组与定义完全匹配
                return enumItemIndex === -1;
            }
        }
    } else if (typeConstructor && variable instanceof typeConstructor) {
        return true;
    }
    return false;
}

// 类型定义是否属于基础类型
const isDefPrimitive = (typeAnnotation) => {
    const { typeKind, typeNamespace, typeName } = typeAnnotation || {};
    if (typeKind === 'primitive' && typeNamespace === 'nasl.core') {
        return [
            'Boolean',
            'Integer',
            'Long',
            'Double',
            'Decimal',
            'String',
            'Text',
            'Binary',
            'Date',
            'Time',
            'DateTime',
            'Email',
        ].includes(typeName);
    }
    return false;
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
const isTypeMatch = (typeAnnotation, value) => {
    const isPrimitive = isDefPrimitive(typeAnnotation); // 类型字符串
    const isValuePrimitive = isValPrimitive(value); // 类型字符串
    let isMatch = isPrimitive === isValuePrimitive;
    const typeStr = Object.prototype.toString.call(value);
    // 大类型匹配的基础上继续深入判断
    if (isMatch) {
        const { typeKind, typeNamespace, typeName } = typeAnnotation || {};
        if (isPrimitive) {
            if (
                typeName === 'Boolean' && typeStr !== '[object Boolean]'
                || [
                    'Integer',
                    'Long',
                    'Double',
                    'Decimal',
                ].includes(typeName) && typeStr !== '[object Number]'
                || [
                    'String',
                    'Text',
                    'Binary',
                    'Date',
                    'Time',
                    'DateTime',
                    'Email',
                ].includes(typeName) && typeStr !== '[object String]'
            ) {
                isMatch = false;
            }
        } else {
            const isArray = typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List';
            const isValueArray = typeStr === '[object Array]';
            if (isArray !== isValueArray) {
                isMatch = false;
            }
        }
    }
    return isMatch;
};

// 初始化变量
export const genInitData = (typeAnnotation, parentLevel) => {
    let level = 1;
    if (parentLevel !== undefined) {
        level = parentLevel + 1;
    }
    const { typeKind, typeNamespace, typeName, typeArguments, defaultValue } = typeAnnotation || {};
    const parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
    if (level > 2 && !defaultValue) {
        return;
    }
    const isTypeMatched = parsedValue === undefined || isTypeMatch(typeAnnotation, parsedValue);
    if (isTypeMatched) {
        if (typeKind === 'generic' && typeNamespace === 'nasl.collection') { // 范型
            let initVal = (typeName === 'List' ? [] : {});
            if (Array.isArray(typeArguments) && typeArguments.length > 0) {
                const valueTypeAnnotation = typeName === 'List' ? typeArguments[0] : typeArguments[1];
                initVal.__valueTypeAnnotation = valueTypeAnnotation;
                initVal.__valueInstance = genInitData(valueTypeAnnotation, level);
            }
            if (parsedValue) {
                const valueTypeAnnotation = initVal.__valueTypeAnnotation || {};
                if (typeName === 'List' && Array.isArray(parsedValue)) {
                    initVal = parsedValue.map((item) => genInitData({
                        ...valueTypeAnnotation,
                        defaultValue: item,
                    }, level));
                } else {
                    initVal = genInitData({
                        ...valueTypeAnnotation,
                        defaultValue: parsedValue,
                    }, level);
                }
            }
            return initVal;
        }
        const typeKey = genTypeKey(typeAnnotation);
        if (typeKey) {
            let TypeConstructor = typeMap[typeKey] || typeMap[`app.${typeKey}`];
            if (typeKind !== 'primitive' && !TypeConstructor) {
                TypeConstructor = genConstructor(typeKey, typeAnnotation);
            }
            // union 不使用构造函数初始化
            if (TypeConstructor && typeKind !== 'union' && (typeKind !== 'reference' || typeNamespace !== 'app.enums')) {
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
