let dataTypesForSchema = {};
function importAll(r) {
    r.keys().forEach((key) => {
        // now only one file
        return dataTypesForSchema = r(key);
    });
}
importAll(require.context('./', true, /\/dataTypes.json$/));

export default dataTypesForSchema;
