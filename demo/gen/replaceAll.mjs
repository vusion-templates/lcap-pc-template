
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

if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function (callback) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (callback(this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
};
