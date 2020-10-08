
import { makeExecutableSchema } from '@graphql-tools/schema';
// Setup Apollo client as usual, but use SchemaLink
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import typeDefs from '../../apollo/schema.gql';
import { resolvers } from '../../apollo/resolver';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// define our apolloclient
export const apolloClient = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only', // 获取最新的请求数据
            errorPolicy: 'all',
        },
    },
});
