// schema 和 dataTypes 解析出最终结构是在 template 内部， 所以从 low-code-fe 迁移过来的转化方法
export const genInitData = (schema, dataTypesMap, relationship = 'None', usedSchemaRefs = {}) => {
    if (relationship !== 'None' && Object.keys(usedSchemaRefs).every((ref) => ref.includes('/entities/'))) {
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

    // if(ref && ref.startsWith('#/systemTypes/')) {
    //     return;
    // }
    if (schema.defaultValue)
        return schema.defaultValue;

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
        if (schema.defaultValue)
            return schema.defaultValue;

        if (ref === '#/basicTypes/Boolean')
            return { type: 'BooleanLiteral', value: false };
        else if (ref === '#/basicTypes/Integer')
            return { type: 'NumericLiteral', name: 0 };
        else if (ref === '#/basicTypes/Long')
            return { type: 'Identifier', name: 'undefined' };
        else if (ref === '#/basicTypes/Decimal')
            return { type: 'NumericLiteral', name: 0.0 };
        else
            return { type: 'Identifier', name: 'undefined' };
    } else if (next) {
        // 现在比较多的 string 也是有内部的显示结构的，所以主要是是根据 schema 的 ref 去判断  schema.type === 'string'
        return genInitData(next.definition, dataTypesMap, relationship, usedSchemaRefs);
    } else
        return { type: 'Identifier', name: 'undefined' };
};
