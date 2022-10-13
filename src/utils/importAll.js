export const importAll = (r) => {
    const map = {};
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
        map[namespace] = serviceFileContent;
    });
    return map;
};
