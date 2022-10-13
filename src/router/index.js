import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function initRouter(routes) {
    return new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
    });
}
