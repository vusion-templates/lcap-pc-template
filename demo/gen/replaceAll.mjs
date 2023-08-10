
if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search, replace) {
        if (typeof search === 'string') {
            return this.split(search).join(replace);
        } else if (search instanceof RegExp) {
            const re = new RegExp(search, 'g');
            return this.replace(re, replace);
        } else {
            throw new TypeError('search argument must be either string or regular expression');
        }
    };
}
