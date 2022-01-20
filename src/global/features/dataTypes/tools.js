function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) {}

    return result;
}

const isNil = (value) => value === undefined || value === null || value === '';

// schema 和 dataTypes 解析出最终结构是在 template 内部， 所以从 low-code-fe 迁移过来的转化方法
export const genInitData = (schema, dataTypesMap, useDefaultValue = false, usedSchemaRefs = {}, level = 0) => {
    const isEnum = (property) => property.$ref && dataTypesMap[property.$ref] && dataTypesMap[property.$ref].level === 'enum';

    if (schema.$ref && !schema.typeKey) { // 兼容有些已经生成缓存的页面
        schema.typeKey = schema.$ref;
    }
    const typeKey = schema.typeKey;
    if (typeKey && usedSchemaRefs[typeKey])
        return { type: 'Identifier', name: 'undefined' };

    const next = dataTypesMap[typeKey];
    usedSchemaRefs = Object.assign({}, usedSchemaRefs);
    if (typeKey && !(typeKey.startsWith('#/basicTypes/') || typeKey.startsWith('#/genericTypes/'))) {
        usedSchemaRefs[typeKey] = true;
    }

    // 泛型优先
    if (schema.type === 'genericType') {
        if (schema.typeKey === '#/genericTypes/List') {
            return { type: 'ArrayExpression', elements: [] };
        }
        const result = { type: 'ObjectExpression', properties: [] };
        const genericClass = dataTypesMap[schema.typeKey];
        if (genericClass) {
            const propertyList = genericClass.propertyList;
            propertyList.forEach((property) => {
                let propertySchema = property;
                if (property.type === 'genericParam' && schema.typeInstantiation) {
                    const param = schema.typeInstantiation.typeParams.find((typeParam) => typeParam.typeParamName === property.typeParamName);
                    if (param) {
                        propertySchema = Object.assign({ name: property.name }, param.typeParamValue);
                    }
                }
                result.properties.push({
                    type: 'ObjectProperty',
                    key: {
                        type: 'Identifier',
                        name: property.name,
                    },
                    value: genInitData(propertySchema, dataTypesMap, true, usedSchemaRefs, level + 1),
                });
            });
        }
        return result;
    } else if (schema.type === 'object') { // Entity、structure的type是object
        if (level >= 1)
            return { type: 'Identifier', name: 'undefined' };

        const result = { type: 'ObjectExpression', properties: [] };
        schema.propertyList.forEach((property) => {
            result.properties.push({
                type: 'ObjectProperty',
                key: {
                    type: 'Identifier',
                    name: property.name,
                },
                value: genInitData(property, dataTypesMap, true, usedSchemaRefs, level + 1),
            });
        });
        return result;
    } else {
        // 需要和产品讨论一下 New 的问题
        if (isEnum(schema)) {
            if (schema.defaultValue === null || schema.defaultValue === undefined)
                return { type: 'Identifier', name: 'undefined' };
            else
                return { type: 'StringLiteral', value: schema.defaultValue };
        } else if (schema.isArray) {
            return { type: 'ArrayExpression', elements: [] };
        } else if (typeKey && typeKey.startsWith('#/basicTypes/')) {
            const parsedValue = tryJSONParse(schema.defaultValue);
            // 输入框为空，或解析的情况
            if (isNil(schema.defaultValue)) {
                return { type: 'Identifier', name: 'undefined' };
            } else {
                if (typeKey === '#/basicTypes/Boolean')
                    return { type: 'BooleanLiteral', value: parsedValue };
                else if (typeKey === '#/basicTypes/Integer')
                    return { type: 'NumericLiteral', value: parsedValue };
                else if (typeKey === '#/basicTypes/Long')
                    return { type: 'NumericLiteral', value: parsedValue };
                else if (typeKey === '#/basicTypes/Decimal')
                    return { type: 'NumericLiteral', value: parsedValue };
                else if (typeKey === '#/basicTypes/String')
                    return { type: 'StringLiteral', value: schema.defaultValue };
                else
                    return { type: 'Identifier', name: 'undefined' };
            }
        } else if (next) {
            // 现在比较多的 string 也是有内部的显示结构的，所以主要是是根据 schema 的 ref 去判断  schema.type === 'string'
            return genInitData(next, dataTypesMap, useDefaultValue, usedSchemaRefs);
        } else
            return { type: 'Identifier', name: 'undefined' };
    }
};
