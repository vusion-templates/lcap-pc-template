const routerLock = {

    update(query, route, router) {
        if (Object.keys(query).some((key) => query[key] !== route.query[key])) {
            router.push({
                path: route.path,
                query: {
                    ...route.query,
                    ...query,
                },
            });
        }
    },
    install(Vue) {
        Vue.prototype.$routerLock = function (query) {
            return routerLock.update(query, this.$route, this.$router);
        };
    },
};
export default routerLock;
