// Setup Apollo client as usual, but use SchemaLink
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
    fetchOptions: {
        method: 'POST',
    },
});

// define our apolloclient
export const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache({
        addTypename: false, // 会破坏 get -> update，暂时先关闭
    }),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only', // 获取最新的请求数据
            errorPolicy: 'all',
        },
    },
});
