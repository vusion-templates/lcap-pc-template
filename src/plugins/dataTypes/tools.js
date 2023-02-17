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
            const childTypeArgs = properties.sort(({ name: name1 }, { name: name2 }) => name1 > name2 ? 1 : -1).map((typeArg) => {
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
        const { typeKind, typeNamespace, typeName, typeArguments, properties } = definition || {};
        let propList = properties;
        if (
            typeKind === 'generic'
        ) {
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
            const genericDefinition = typeMap[genericTypeKey];
            if (genericDefinition) {
                const { typeParams, properties } = genericDefinition || {};
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
                let parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
                if (Object.prototype.toString.call(parsedValue) === '[object String]') {
                    parsedValue = `'${parsedValue}'`;
                }
                const needGenInitFromSchema = typeAnnotation && !['primitive', 'union'].includes(typeAnnotation.typeKind);
                const sortedTypeKey = genTypeKey(typeAnnotation);
                code += `this.${propertyName} = `;
                if (needGenInitFromSchema) {
                    code += `Vue.prototype.$genInitFromSchema('${sortedTypeKey}',`;
                }
                code += `(defaultValue && defaultValue.${propertyName}) ?? ${parsedValue}`;
                if (needGenInitFromSchema) {
                    code += `, level)`;
                }
                code += `;\n`;
            });
        }
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
    const { typeKind, typeNamespace, typeName, typeArguments } = typeDefinition || {};
    const isPrimitive = isDefPrimitive(typeKey);
    if (isPrimitive) { // 基础类型
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
    } else if (typeKind === 'generic' && typeNamespace === 'nasl.collection' && ['List', 'Map'].includes(typeName)) { // 范型
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
    let isMatch = isPrimitive === isValuePrimitive;
    const typeStr = Object.prototype.toString.call(value);
    // 大类型匹配的基础上继续深入判断
    if (isMatch) {
        if (isPrimitive) {
            if (
                typeKey === 'Boolean' && typeStr !== '[object Boolean]'
                || [
                    'nasl.core.Integer',
                    'nasl.core.Long',
                    'nasl.core.Double',
                    'nasl.core.Decimal',
                ].includes(typeKey) && typeStr !== '[object Number]'
                || [
                    'nasl.core.String',
                    'nasl.core.Text',
                    'nasl.core.Binary',
                    'nasl.core.Date',
                    'nasl.core.Time',
                    'nasl.core.DateTime',
                    'nasl.core.Email',
                ].includes(typeKey) && typeStr !== '[object String]'
            ) {
                isMatch = false;
            }
        } else {
            const { typeKind, typeNamespace, typeName } = typeAnnotation || {};
            const isArray = typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List';
            const isValueArray = typeStr === '[object Array]';
            if (isArray !== isValueArray) {
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
    let parsedValue = defaultValue;
    if (!(
        [
            'nasl.core.String', 'nasl.core.Text', 'nasl.core.Email',
        ].includes(typeKey)
    )) {
        // 一些特殊情况，特殊处理成undefined
        // 1.defaultValue在nasl节点上错误得赋值给了空制符串
        // 2.设置成null，才能同步给后端清楚该值，但是null对checkbox组件是一种特殊状态
        if (['', null].includes(defaultValue)) {
            parsedValue = undefined;
        } else {
            parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
        }
    }
    if (level > 2 && parsedValue === undefined) {
        return;
    }
    const isTypeMatched = parsedValue === undefined || isTypeMatch(typeKey, parsedValue);
    if (isTypeMatched) {
        const typeDefinition = typeDefinitionMap[typeKey];
        const { typeKind, typeNamespace, typeName, typeArguments } = typeDefinition || {};
        if (typeKind === 'generic' && typeNamespace === 'nasl.collection') { // 范型
            let initVal = (typeName === 'List' ? [] : {});
            if (Array.isArray(typeArguments) && typeArguments.length > 0) {
                const valueTypeAnnotation = typeName === 'List' ? typeArguments[0] : typeArguments[1];
                const sortedTypeKey = genTypeKey(valueTypeAnnotation);
                initVal.__valueTypeAnnotation = valueTypeAnnotation;
                initVal.__valueInstance = genInitData(sortedTypeKey, undefined, level);
            }
            if (parsedValue) {
                const valueTypeAnnotation = initVal.__valueTypeAnnotation || {};
                const sortedTypeKey = genTypeKey(valueTypeAnnotation);
                if (typeName === 'List' && Array.isArray(parsedValue)) {
                    initVal = parsedValue.map((item) => genInitData(sortedTypeKey, item, level));
                } else {
                    initVal = genInitData(sortedTypeKey, parsedValue, level);
                }
            }
            return initVal;
        }
        if (typeKey) {
            const TypeConstructor = typeMap[typeKey];
            // union 不使用构造函数初始化
            // && typeKind !== 'union' && (typeKind !== 'reference' || typeNamespace !== 'app.enums')
            if (TypeConstructor) {
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
