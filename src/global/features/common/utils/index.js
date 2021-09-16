// fix native toFixed not correct
// see detail http://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/23560569
// solution https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
(function () {
    const oldToFixed = Number.prototype.toFixed;
    /**
         * Decimal adjustment of a number for round.
         *
         * @param {Number}  value The number.
         * @param {Integer} digits  decimal digits
         * @returns {Number} The adjusted value.
         */
    function roundAdjust(value, digits) {
        // If the value is negative...
        if (value < 0)
            return -roundAdjust(-value, digits);

        // Shift
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + digits) : digits)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] - digits) : -digits));
    }

    Number.prototype.toFixed = function (digits) {
        let value = this;
        // 先试验原生函数是否报错,报错即停止
        const nativeValue = oldToFixed.call(value, digits);
        const tempValue = +value;
        value = +value;
        // NaN
        if (value !== tempValue)
            return 'NaN';

        // If the digits is not an integer...
        if (isNaN(digits))
            digits = 0;
        else
            digits = parseInt(digits);

        let roundNum = roundAdjust(value, digits) + '';
        const digitsNum = roundNum.split('.')[1] || '';
        let padRightLength = digits; // 补零个数记位
        // 如果结果不是科学计数法和小数位数不同
        if (roundNum.indexOf('e') === -1 && digitsNum.length !== digits) {
            padRightLength = digits - digitsNum.length;
            if (!digitsNum.length)
                roundNum += '.';

            roundNum += new Array(padRightLength + 1).join('0');
        }
        return roundNum;
    };
})();
