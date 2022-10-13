import { importAll } from '@/utils/importAll';

const middlewareList = importAll(require.context('./', true, /\/(.*?)\/index\.js$/));

export default middlewareList;

export const initMiddleware = function (appConfig) {
    Object.keys(middlewareList).forEach((key) => {
        let middleware = middlewareList[key];
        if (!middleware.before && !middleware.after) {
            middlewareList[key] = middleware = {
                before: middleware,
            };
        }
        if (middleware.before) {
            middleware.before = middleware.before(appConfig);
        }
        if (middleware.after) {
            middleware.after = middleware.after(appConfig);
        }
    });
};
