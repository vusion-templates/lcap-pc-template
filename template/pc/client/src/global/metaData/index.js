/**
 * 原来的 enums, dataTypes 目录之后废弃，统一集中到 metaData
 * 目前为了兼容老版，等之后升级图数据库统一迁移
 */
let dataTypesMap = {};
{
    function importAll(r) {
        r.keys().forEach((key) => dataTypesMap = r(key));
    }
    importAll(require.context('../dataTypes/', true, /\/dataTypes.json$/));
}

const enums = {};
const enumsMap = {};
{
    function importAll(r) {
        r.keys().forEach((key) => enums[key.split('/')[1]] = r(key));
    }
    importAll(require.context('./', true, /\/(.*?)\/enums\.json$/));
    function createEnum(items) {
        const Enum = (key) => items[key];
        Object.assign(Enum, items);
        return Enum;
    }
    Object.keys(enums).forEach((serviceName) => {
        Object.keys(enums[serviceName]).forEach((enumKey) => {
            enumsMap[enumKey] = enumsMap[enumKey] || {};
            enumsMap[enumKey] = createEnum(enums[serviceName][enumKey]);
        });
    });
}

const servicesMap = {};
{
    function importAll(r) {
        r.keys().forEach((key) => {
            const serviceFileContent = r(key);
            const moduleServiceName = key.replace('./', '').replace('api.json', '').split('/');
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
            servicesMap[namespace] = serviceFileContent;
        });
    }

    importAll(require.context('../services/', true, /\/(.*?)\/api\.json$/));
}

export default { dataTypesMap, enumsMap, servicesMap };
