import isFunction from 'lodash/isFunction';
import { getComponentOption } from '../util';
export default {
    after(appConfig) {
        return function ({ to, from, appConfig }) {
            const appendTitle = (title) => title + ' - 轻舟・低代码';
            const metaTitle = to.matched.concat().reverse().map((item) => {
                const componentOptions = getComponentOption(item);
                return componentOptions?.meta?.title || item.meta?.title;
            }).filter((i) => i)[0];
            if (metaTitle) {
                document.title = appendTitle(isFunction(metaTitle) ? metaTitle(to, from) : metaTitle);
            }
        };
    },
};
