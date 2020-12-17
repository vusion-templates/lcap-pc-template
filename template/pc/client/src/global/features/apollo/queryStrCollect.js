import { stringify } from 'qs';

/**
 * 根据实体解析动态的 endpoint
 */
function getUriValue(schemaRef = '') {
    const arr = schemaRef.split('/');
    return `/gw/${arr[1]}/graphql`;
}

/* eslint-disable no-underscore-dangle */
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$graphql', {
            get() {
                return {
                    query: (schemaRef, operationName, graphqlClient, variables) => {
                        const arr = schemaRef.split('/');
                        arr.shift();
                        arr.pop();
                        const newVariables = {};
                        Object.keys(variables || {}).forEach((key) => {
                            // key 如果是保留的关键字， query，需要转化成 string 提供给后端
                            let value = variables[key];
                            if (key === 'query') {
                                value = stringify(value, { arrayFormat: 'repeat', encoder(str, defaultEncoder, charset, type) {
                                    if (type === 'value' && str.includes && str.includes(','))
                                        return encodeURI(str);
                                    else
                                        return defaultEncoder(...arguments);
                                } });
                            }
                            newVariables[`Query__${operationName}__${key}`] = value;
                        });

                        return this.$apollo.query({
                            query: this.$utils.gql `${graphqlClient}`,
                            variables: newVariables,
                            context: {
                                uri: getUriValue(schemaRef),
                            },
                        }).then((res) => {
                            console.log(res);
                            return res.data && res.data[operationName];
                        });
                    },
                    mutation: (schemaRef, operationName, graphqlClient, variables) => {
                        const arr = schemaRef.split('/');
                        arr.shift();
                        arr.pop();
                        const newVariables = {};
                        Object.keys(variables || {}).forEach((key) => {
                            newVariables[`Mutation__${operationName}__${key}`] = variables[key];
                        });

                        return this.$apollo.mutate({
                            mutation: this.$utils.gql `${graphqlClient}`,
                            variables: newVariables,
                            context: {
                                uri: getUriValue(schemaRef),
                            },
                        }).then((res) => res.data[operationName]);
                    },
                };
            },
        });
    },
};
