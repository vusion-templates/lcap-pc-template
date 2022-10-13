import isFunction from 'lodash/isFunction';
import { getComponentOption } from '../util';

export default {
    after(appConfig) {
        return function ({ to, from, appConfig }) {
            const metaTitle = to.matched.concat().reverse().map((item) => {
                const componentOptions = getComponentOption(item);
                return componentOptions?.meta?.title || item.path.slice(1) || item.meta?.title;
            }).filter((i) => i)[0];
            if (metaTitle) {
                if (isFunction(metaTitle)) {
                    document.title = metaTitle(to, from);
                } else {
                    if (appConfig.documentTitle) {
                        document.title = appConfig.documentTitle.replaceAll('$页面标题', metaTitle).replaceAll('$应用名称', appConfig.project);
                    } else {
                        document.title = `${metaTitle}-${appConfig.project}`;
                    }
                }
            }
        };
    },
};
