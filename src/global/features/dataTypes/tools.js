function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) {}

    return result;
}

// schema 和 dataTypes 解析出最终结构是在 template 内部， 所以从 low-code-fe 迁移过来的转化方法
export const genInitData = (schema, dataTypesMap, relationship = 'None', usedSchemaRefs = {}) => {
    const isEnum = (property) => {
        return property.$ref && dataTypesMap[property.$ref] && dataTypesMap[property.$ref].level === 'enum';
    };

    if (relationship && relationship !== 'None' && Object.keys(usedSchemaRefs).every((ref) => {
        const refData = dataTypesMap[ref] || {};
        return refData.level === 'entity';
    })) {
        if (!relationship || relationship.endsWith('ToOne')) {
            return { type: 'ObjectExpression', properties: [{
                type: 'ObjectProperty',
                key: {
                    type: 'Identifier',
                    name: 'id',
                },
                value: {
                    type: 'Identifier',
                    name: 'undefined',
                },
            }] };
        } else {
            return { type: 'ArrayExpression', elements: [] };
        }
    }

    if (schema.$ref && !schema.typeKey) { // 兼容有些已经生成缓存的页面
        schema.typeKey = schema.$ref;
    }
    const typeKey = schema.typeKey;
    if (typeKey && usedSchemaRefs[typeKey])
        return { type: 'Identifier', name: 'undefined' };
    // 理论上可以继续往下选，但这里先断掉！

    const next = dataTypesMap[typeKey];
    usedSchemaRefs = Object.assign({}, usedSchemaRefs);
    if (typeKey && !(typeKey.startsWith('#/basicTypes/') || typeKey.startsWith('#/genericTypes/')))
        usedSchemaRefs[typeKey] = true;

    // if (schema.defaultValue)
    //     return schema.defaultValue;

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
                    value: genInitData(propertySchema, dataTypesMap, 'None', usedSchemaRefs),
                });
            });
        }
        return result;
    } else if (schema.type === 'object') { // Entity、structure的type是object
        const result = { type: 'ObjectExpression', properties: [] };
        schema.propertyList.forEach((property) => {
            result.properties.push({
                type: 'ObjectProperty',
                key: {
                    type: 'Identifier',
                    name: property.name,
                },
                value: genInitData(property, dataTypesMap, property.relationship, usedSchemaRefs),
            });
        });
        return result;
    } else if (isEnum(schema)) {
        if (schema.defaultValue === null || schema.defaultValue === undefined)
            return { type: 'Identifier', name: 'undefined' };
        else
            return { type: 'StringLiteral', value: schema.defaultValue };
    } else if (schema.isArray) {
        return { type: 'ArrayExpression', elements: [] };
    } else if (typeKey && typeKey.startsWith('#/basicTypes/')) {
        // if (schema.defaultValue)
        //     return schema.defaultValue;

        if (typeKey === '#/basicTypes/Boolean')
            return { type: 'BooleanLiteral', value: tryJSONParse(schema.defaultValue) || false };
        else if (typeKey === '#/basicTypes/Integer')
            return { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0 };
        else if (typeKey === '#/basicTypes/Long')
            return schema.defaultValue === undefined || schema.defaultValue === null ? { type: 'Identifier', name: 'undefined' } : { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0 };
        else if (typeKey === '#/basicTypes/Decimal')
            return { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0.0 };
        else if (typeKey === '#/basicTypes/String')
            return { type: 'StringLiteral', value: schema.defaultValue || '' };
        else
            return { type: 'Identifier', name: 'undefined' };
    } else if (next) {
        // 现在比较多的 string 也是有内部的显示结构的，所以主要是是根据 schema 的 ref 去判断  schema.type === 'string'
        return genInitData(next, dataTypesMap, relationship, usedSchemaRefs);
    } else
        return { type: 'Identifier', name: 'undefined' };
};
