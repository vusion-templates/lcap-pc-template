const enums = {};
function importAll(r) {
    r.keys().forEach((key) => enums[key.split('/')[1]] = r(key));
}
importAll(require.context('./', true, /\/(.*?)\/enums\.json$/));

function createEnum(items) {
    const Enum = (key) => items[key];
    Object.assign(Enum, items);
    return Enum;
}

const map = {};
Object.keys(enums).forEach((serviceName) => {
    Object.keys(enums[serviceName]).forEach((enumKey) => {
        map[enumKey] = map[enumKey] || {};
        map[enumKey] = createEnum(enums[serviceName][enumKey]);
    });
});

export default map;
