function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) { }

    return result;
}

const typeMap = new Map();

function genTypeKeyArr(typeAnnotation) {
    const {
        typeKind, typeNamespace, typeName,
        typeArguments,
    } = typeAnnotation || {};
    const typeKeyArr = [];
    typeNamespace && typeKeyArr.push(typeNamespace);
    typeName && typeKeyArr.push(typeName);
    if (typeKind === 'generic') {
        if (Array.isArray(typeArguments)) {
            typeArguments.forEach((typeArgument) => {
                typeKeyArr.push(...genTypeKeyArr(typeArgument));
            });
        }
    }
    return typeKeyArr;
}

export function genTypeKey(typeAnnotation) {
    return genTypeKeyArr(typeAnnotation).join('.');
}

function genConstructor(typeName, definition) {
    if (typeMap[typeName]) {
        return typeMap[typeName];
    } else {
        const { properties } = definition;
        let fnStr = '';
        if (Array.isArray(properties)) {
            properties.forEach((property) => {
                fnStr += `this.${property.name} = params && params.${property.name};\n`;
            });
        }
        const fn = Function('params', fnStr);
        typeMap[typeName] = fn;
        return fn;
    }
}

export const primitiveTypes = [
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
];

export function initApplicationConstructor(dataTypesMap) {
    if (dataTypesMap) {
        for (const typeName in dataTypesMap) {
            genConstructor(typeName, dataTypesMap[typeName]);
        }
    }
}

export function isInstanceOf(variable, typeAnnotation) {
    const { typeKind } = typeAnnotation;
    const typeKey = genTypeKey(typeAnnotation);
    const typeConstructor = typeMap[typeKey];
    if (typeConstructor && variable instanceof typeConstructor) {
        console.log(111);
    } else if (typeKind === 'primitive') {

    }
    return false;
}

export const genInitData = (typeAnnotation) => {
    const { typeKind, defaultValue } = typeAnnotation || {};
    const parsedValue = tryJSONParse(defaultValue);
    const typeKey = genTypeKey(typeAnnotation);
    let TypeConstructor = typeMap[typeKey];
    if (typeKind === 'generic') {
        TypeConstructor = genConstructor(typeKey, typeAnnotation);
    }
    if (TypeConstructor) {
        return new TypeConstructor(parsedValue);
    } else if (typeKind === 'primitive') {
        return parsedValue;
    }
};
