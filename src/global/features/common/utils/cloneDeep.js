const cloneDeep = (obj, func) => Object.entries(obj)
// .filter(([k,v]) => v != undefined)
    .reduce((r, [k, v]) => {
        const value = func ? func(v) : v;
        r[k] = (value instanceof Object) ? cloneDeep(value, func) : value;
        return r;
    }, {});

export default cloneDeep;
