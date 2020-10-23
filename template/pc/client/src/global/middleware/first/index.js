import { getComponentOption } from '../util';
export default function (appConfig) {
    return function ({ to, from, next, appConfig }) {
        const matched = to.matched || [];
        const componentOptions = getComponentOption(matched[matched.length - 1]);

        if (componentOptions?.meta?.first) {
            next({
                path: to.path + (to.path.endsWith('/') ? '' : '/') + componentOptions.meta.first,
                query: {
                    ...to.query,
                },
                params: {
                    ...to.params,
                },
                replace: true,
            });
        } else {
            next();
        }
    };
}
