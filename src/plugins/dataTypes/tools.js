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
        typeArguments,
    } = typeAnnotation || {};
    const typeKeyArr = [];
    if (typeKind === 'union') {
        if (Array.isArray(typeArguments)) {
            const childTypeArgs = typeArguments.map((typeArg) => genTypeKey(typeArg));
            typeKeyArr.push(childTypeArgs.join(' | '));
        }
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
        if (typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List') {
            return;
        }
        let fnStr = '';
        // if (definition) {
        //    fnStr += `this.__isPrimitive = ${isPrimitive} ?? false;\n`;
        //    fnStr += `this.__typeKey = '${typeKey}';\n`;
        // }
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
                // if (isPrimitive) {
                //    fnStr += `this.${propertyName} = params && params.${propertyName};\n`;
                // } else {
                fnStr += `this.${propertyName} = (params && params.${propertyName}) ?? Vue.prototype.$genInitFromSchema(${JSON.stringify(typeAnnotation)}, ${parsedValue});\n`;
                // }
            });
        }
        const fn = Function('params', fnStr);
        typeMap[typeKey] = fn;
        return fn;
    }
}

// 基础类型的class
// [
//    'Boolean',
//    'Integer',
//    'Long',
//    'Double',
//    'Decimal',
//    'String',
//    'Text',
//    'Binary',
//    'Date',
//    'Time',
//    'DateTime',
//    'Email',
// ].forEach((typeName) => {
//    const typeAnnotation = {
//        typeKind: 'primitive',
//        typeNamespace: 'nasl.core',
//        typeName,
//    };
//    const typeKey = genTypeKey(typeAnnotation);
//    genConstructor(typeKey, {
//        isPrimitive: true,
//        name: typeName,
//        properties: [
//            {
//                name: 'value',
//            },
//        ],
//    });
// });

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
    } else if (typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List') { // 数组
        // 期望的子类型
        const firstTypeArg = typeArguments?.[0];
        const {
            typeKind: firstTypeTypeKind,
            typeArguments: firstTypeTypeArgs,
        } = firstTypeArg || {};
        let expectedItemTypeAnnotations = [firstTypeArg];
        // union类型满足一个即可
        if (firstTypeTypeKind === 'union') {
            expectedItemTypeAnnotations = firstTypeTypeArgs;
        }
        let expectedItemTypeAnnotationIndex = -1;
        if (Array.isArray(expectedItemTypeAnnotations)) {
            expectedItemTypeAnnotationIndex = expectedItemTypeAnnotations.findIndex((expectedItemTypeAnnotation) => {
                if (varStr === '[object Array]' && expectedItemTypeAnnotation) {
                    if (variable.length > 0) {
                        return isInstanceOf(variable[0], expectedItemTypeAnnotation);
                    } else {
                        const { __itemInstance, __itemTypeAnnotation } = variable;
                        if (!__itemInstance && __itemTypeAnnotation) {
                            return __itemTypeAnnotation.typeKind === expectedItemTypeAnnotation.typeKind
                                && __itemTypeAnnotation.typeNamespace === expectedItemTypeAnnotation.typeNamespace
                                && __itemTypeAnnotation.typeName === expectedItemTypeAnnotation.typeName;
                        } else {
                            return isInstanceOf(__itemInstance, expectedItemTypeAnnotation);
                        }
                    }
                }
                return false;
            });
        }
        return expectedItemTypeAnnotationIndex !== -1;
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

// 初始化变量
export const genInitData = (typeAnnotation) => {
    const { typeKind, typeNamespace, typeName, typeArguments, defaultValue } = typeAnnotation || {};
    const parsedValue = tryJSONParse(defaultValue) ?? defaultValue;
    const typeKey = genTypeKey(typeAnnotation);
    let TypeConstructor = typeMap[typeKey];
    if (typeKind !== 'primitive' && !TypeConstructor) {
        TypeConstructor = genConstructor(typeKey, typeAnnotation);
    }
    if (typeKind === 'generic' && typeNamespace === 'nasl.collection' && typeName === 'List') {
        const initList = [];
        if (Array.isArray(typeArguments) && typeArguments.length > 0) {
            const itemTypeAnnotation = typeArguments[0];
            initList.__itemTypeAnnotation = itemTypeAnnotation;
            initList.__itemInstance = genInitData(itemTypeAnnotation);
        }
        return initList;
    }
    if (TypeConstructor) {
        const instance = new TypeConstructor(parsedValue);
        return instance;
    } else if (parsedValue) {
        return parsedValue;
    }
};
