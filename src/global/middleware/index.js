const middlewareList = {};

function importAll(r) {
    r.keys().forEach((key) => {
        const serviceFileContent = r(key).default;
        const moduleServiceName = key.replace('./', '').replace('.js', '').split('/');
        if (moduleServiceName.length > 1) {
            const last = moduleServiceName.pop();
            if (last !== 'index') {
                moduleServiceName.push(last);
            }
        }
        const namespace = moduleServiceName.reduce((pre, current) => {
            if (pre) {
                current = current.replace(/^[a-z]/, (s) => s.toUpperCase()).replace(/-([a-z])/g, (a, s) => s.toUpperCase());
            }
            return pre + current;
        }, '');
        middlewareList[namespace] = serviceFileContent;
    });
}

importAll(require.context('./', true, /\/(.*?)\/index\.js$/));
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
