import isFunction from 'lodash/isFunction';
import { getComponentOption } from '../util';
export default {
    after(appConfig) {
        return function ({ to, from, appConfig }) {
            const metaTitle = to.matched.concat().reverse().map((item) => {
                const componentOptions = getComponentOption(item);
                return componentOptions?.meta?.title || item.meta?.title;
            }).filter((i) => i)[0];
            if (metaTitle) {
                document.title = isFunction(metaTitle) ? metaTitle(to, from) : appConfig.documentTitle.replace('$页面名称', metaTitle).replace('$应用名称', appConfig.project);
            }
        };
    },
};
