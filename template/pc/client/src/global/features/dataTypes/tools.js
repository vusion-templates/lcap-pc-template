function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) {}

    return result;
}

// schema 和 dataTypes 解析出最终结构是在 template 内部， 所以从 low-code-fe 迁移过来的转化方法
export const genInitData = (schema, dataTypesMap, relationship = 'None', usedSchemaRefs = {}) => {
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

    const ref = schema.$ref;
    if (ref && usedSchemaRefs[ref])
        return { type: 'Identifier', name: 'undefined' };
    // 理论上可以继续往下选，但这里先断掉！

    const next = dataTypesMap[ref];
    usedSchemaRefs = Object.assign({}, usedSchemaRefs);
    if (ref && !ref.startsWith('#/basicTypes/'))
        usedSchemaRefs[ref] = true;

    // if (schema.defaultValue)
    //     return schema.defaultValue;

    if (schema.type === 'object') {
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
    } else if (schema.type === 'enum') {
        return { type: 'Identifier', name: 'undefined' }; // schema.enumItemList[0].value
    } else if (schema.isArray) {
        return { type: 'ArrayExpression', elements: [] };
    } else if (ref && ref.startsWith('#/basicTypes/')) {
        // if (schema.defaultValue)
        //     return schema.defaultValue;

        if (ref === '#/basicTypes/Boolean')
            return { type: 'BooleanLiteral', value: tryJSONParse(schema.defaultValue) || false };
        else if (ref === '#/basicTypes/Integer')
            return { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0 };
        else if (ref === '#/basicTypes/Long')
            return schema.defaultValue === undefined || schema.defaultValue === null ? { type: 'Identifier', name: 'undefined' } : { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0 };
        else if (ref === '#/basicTypes/Decimal')
            return { type: 'NumericLiteral', value: tryJSONParse(schema.defaultValue) || 0.0 };
        else if (ref === '#/basicTypes/String')
            return { type: 'StringLiteral', value: schema.defaultValue || '' };
        else
            return { type: 'Identifier', name: 'undefined' };
    } else if (next) {
        // 现在比较多的 string 也是有内部的显示结构的，所以主要是是根据 schema 的 ref 去判断  schema.type === 'string'
        return genInitData(next, dataTypesMap, relationship, usedSchemaRefs);
    } else
        return { type: 'Identifier', name: 'undefined' };
};
