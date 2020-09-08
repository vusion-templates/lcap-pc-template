import UMicro from './u-micro.vue';
export default {
    components: {
        UMicro,
    },
    beforeRouteEnter(to, from, next) {
        const last = to.matched[to.matched.length - 1];
        const prefix = last.path.replace('**', '').replace(/\/$/, '');
        const fullPath = to.fullPath;
        if (to.path.replace(/\/$/, '') !== prefix) {
            const params = {
                ...to.params,
            };
            const query = {
                ...to.query,
                _m: fullPath, // fix refresh subApp page
            };
            next({
                params,
                query,
                path: prefix,
            });
        } else {
            next();
        }
    },
};
