module.exports = {
    chain(config) {
        config.module.rule('graphql-tag/loader')
            .test(/\b\.(graphql|gql)$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader');
    },
};
