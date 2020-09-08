module.exports = {
    printStart(str) {
        console.log();
        console.log(`*****************| ${str} start |*******************`);
        console.log();
    },
    printEnd(str) {
        console.log();
        console.log(`*****************| ${str} end |*******************`);
        console.log();
    },
    printInfo(str) {
        console.log();
        console.log(str);
        console.log();
    },
    success(str) {
        console.log("\x1b[42m\x1b[37m\u2713\x1b[0m\x1b[32m", str, "\x1b[0m");
    },
};