import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { apolloClient } from './client';

Vue.use(VueApollo);
let apollo;

export function apolloProvider() {
    apollo = new VueApollo({
        clients: {
            a: apolloClient,
        },
        defaultClient: apolloClient,
        defaultOptions: {
            $loadingKey: 'loading',
        },
        watchLoading(state, mod) {
            // loading += mod
            // console.log('Global loading', loading, mod)
        },
        errorHandler(error) {
            console.log('Global error handler');
            console.error(error);
        },
    });
    return apollo;
}

export default apollo;
