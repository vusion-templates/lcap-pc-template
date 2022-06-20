function tryJSONParse(str) {
    let result;

    try {
        result = JSON.parse(str);
    } catch (e) { }

    return result;
}

const isNil = (value) => value === undefined || value === null || value === '';

// typeAnnotation 和 dataTypes 解析出最终结构是在 template 内部， 所以从 low-code-fe 迁移过来的转化方法
export const genInitData = (
    typeAnnotation,
    dataTypesMap,
    useDefaultValue = false,
    usedSchemaRefs = {},
    level = 0,
) => {
    const { typeKind, typeNamespace, typeName } = typeAnnotation || {};
    const typeKey = `${typeNamespace}.${typeName}`;
    const next = dataTypesMap[typeKey];
    usedSchemaRefs = Object.assign({}, usedSchemaRefs);
    if (next) {
        if (next.concept === 'Enum') {
            if (typeAnnotation.defaultValue === null || typeAnnotation.defaultValue === undefined) {
                return {
                    type: 'Identifier',
                    name: 'undefined',
                };
            } else {
                return {
                    type: 'StringLiteral',
                    value: typeAnnotation.defaultValue,
                };
            }
        } else if (next.concept === 'Entity' || next.concept === 'Structure') {
            if (next.name === 'List') {
                return {
                    type: 'ArrayExpression',
                    elements: [],
                };
            }

            if (level >= 1) {
                return {
                    type: 'Identifier',
                    name: 'undefined',
                };
            }
            const result = {
                type: 'ObjectExpression',
                properties: [],
            };
            next.properties.forEach((property) => {
                result.properties.push({
                    type: 'ObjectProperty',
                    key: {
                        type: 'Identifier',
                        name: property.name,
                    },
                    value: genInitData(property.typeAnnotation, dataTypesMap, true, usedSchemaRefs, level + 1),
                });
            });
            return result;
        } else {
            return {
                type: 'Identifier',
                name: 'undefined',
            };
        }
    } else if (typeKind === 'primitive') {
        const parsedValue = tryJSONParse(typeAnnotation.defaultValue);
        // 输入框为空，或解析的情况
        if (isNil(typeAnnotation.defaultValue)) {
            return {
                type: 'Identifier',
                name: 'undefined',
            };
        } else if (typeName === 'Boolean') {
            return {
                type: 'BooleanLiteral',
                value: parsedValue,
            };
        } else if (typeName === 'Integer') {
            return {
                type: 'NumericLiteral',
                value: parsedValue,
            };
        } else if (typeName === 'Long') {
            return {
                type: 'NumericLiteral',
                value: parsedValue,
            };
        } else if (typeName === 'Decimal') {
            return {
                type: 'NumericLiteral',
                value: parsedValue,
            };
        } else if (typeName === 'String') {
            return {
                type: 'StringLiteral',
                value: typeAnnotation.defaultValue,
            };
        } else {
            return {
                type: 'Identifier',
                name: 'undefined',
            };
        }
    } else {
        return {
            type: 'Identifier',
            name: 'undefined',
        };
    }
};
