let metaData = {};
function importAll(r) {
    r.keys().forEach((key) => {
        metaData = r(key);
    });
}
importAll(require.context('./', true, /\/metaData.json$/));
export default metaData;
