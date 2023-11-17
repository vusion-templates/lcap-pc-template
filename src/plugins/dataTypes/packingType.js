import Long from 'long';
import { Decimal } from 'decimal.js';
const getPrecision = (str) => (str?.split('.')[1] || '').length;
const isNil = (v) => v === undefined || v === null || v === 'undefined' || v === 'null' || (v !== 0 && !v);

window.Long = Long;
window.Decimal = Decimal;
export class NaslDecimal {
    __value = new Decimal(0)

    __str = ''

    fixedNum = 0

    constructor(v) {
        //  兼容 undefined 空 数字 字符串  包装类本身 和其他包装类互转
        if (isNil(v)) {
            v = '0';
            this.__str = undefined;
        } else if (v instanceof NaslDecimal) {
            this.fixedNum = v.fixedNum;
            this.__str = v.__str;
            this.value = v.value;
        } else if (v instanceof NaslLong) {
            this.fixedNum = v.fixedNum || 0; // 整数转小数  要默认保留几位小数？
            this.__str = v.__str;
            this.value = v.__str; // 用新的包装类在初始化字符串一次
        } else {
            this.fixedNum = typeof v === 'string' ? v.length : v.toString().length;
            this.__str = v.toString();
            this.value = v;
        }
    }

    get length() {
        return this.__str?.length || 0;
    }

    get value() {
        return this.__value;
    }

    set value(v) {
        if (typeof v === 'string' || typeof v === 'number') {
            this.__value = new Decimal(v);
        } else {
            this.__value = v;
        }
    }

    valueOf() {
        return this.value.toNumber();
    }

    toString() {
        if (!this.__str || this.__str === undefined)
            return undefined;
        const result = window.$utils.ToString('nasl.core.Decimal', this.__str || this.value);
        return result;
    }

    toJSON() {
        return this.toString();
    }

    add(v) {
        return this.binaryOperations(v, (targetValue) => this.value.add(targetValue));
    }

    minus(v) {
        return this.binaryOperations(v, (targetValue) => this.value.sub(targetValue));
    }

    multiply(v) {
        const operationCb = (targetValue) => this.value.mul(targetValue);
        if (v === undefined || !v) {
            v = '0';
        }
        let result;
        let vStr;
        if (v instanceof NaslDecimal) {
            vStr = v.__str;
            result = operationCb(v.value);
        } else {
            // js 原生类型 number
            vStr = v.toString();
            result = operationCb((new NaslDecimal(v.toString()).value));
        }
        let resultStr = String(result);

        // 操作数精度相加，作为结果的精度
        resultStr = result.toFixed(getPrecision(this.__str) + getPrecision(vStr));

        return new NaslDecimal(resultStr);
    }

    divide(v) {
        // return this.binaryOperations(v, (targetValue) => this.value.div(targetValue));
        if (String(v) === '0') {
            throw new Error('除数不能为 0');
        }

        const operationCb = (targetValue) => this.value.div(targetValue);
        if (v === undefined || !v) {
            v = '0';
        }
        let vStr = '';
        let result;
        if (v instanceof NaslDecimal) {
            vStr = v.__str;
            result = operationCb(v.value);
        } else {
            // js 原生类型 number
            vStr = v.toString();
            result = operationCb((new NaslDecimal(v.toString()).value));
        }

        // 操作数精度相减，并和结果中的精度取较大者
        const resultStr = result.toFixed(Math.max(getPrecision(String(result)),
            getPrecision(this.__str) - getPrecision(vStr)));
        return new NaslDecimal(resultStr);
    }

    mod(v) {
        if (String(v) === '0') {
            throw new Error('除数不能为 0');
        }
        // return this.binaryOperations(v, (targetValue) => this.value.mod(targetValue));
        const operationCb = (targetValue) => this.value.mod(targetValue);
        if (v === undefined || !v) {
            v = '0';
        }
        let result;
        if (v instanceof NaslDecimal) {
            result = operationCb(v.value);
        } else {
            result = operationCb((new NaslDecimal(v.toString()).value));
        }
        const resultStr = String(result);
        return new NaslDecimal(resultStr);
    }

    binaryOperations(v, operationCb, precision = 0) {
        if (v === undefined || !v) {
            v = '0';
        }
        let vStr = '';
        let result;
        if (v instanceof NaslDecimal) {
            vStr = v.__str;
            result = operationCb(v.value);
        } else {
            //  数字 字符串 undefined Decimal
            vStr = v.toString();
            result = operationCb((new NaslDecimal(v.toString()).value));
        }
        const resultStr = result.toFixed(Math.max(getPrecision(vStr), precision || getPrecision(this.__str)));
        return new NaslDecimal(resultStr);
    }

    equals(target) {
        if (isNil(target)) {
            return target === this.__str || String(target) === this.__str;
        }
        if (target instanceof NaslDecimal || typeof target === 'string') {
            const targetValue = new NaslDecimal(target).value;
            const targetLength = new NaslDecimal(target).length;
            return this.value.equals(targetValue) && targetLength === this.length;
        } else {
            return String(target) === this.__str;
        }
    }

    gt(target) {
        return this.value.gt(new NaslDecimal(target).value);
    }

    gte(target) {
        return this.value.gte(new NaslDecimal(target).value);
    }

    lt(target) {
        return this.value.lt(new NaslDecimal(target).value);
    }

    lte(target) {
        return this.value.lte(new NaslDecimal(target).value);
    }
}

export class NaslLong {
    __value = new Long(0)// 使用 decimal.js

    __str = ''

    fixedNum = 0

    constructor(v) {
        if (v === true || v === 'true') {
            v = '1';
        }
        if (v === false || v === 'false') {
            v = '0';
        }
        //  兼容 undefined 空 数字 2.21 字符串 ‘2.21’ 包装类本身 和其他包装类互转如NaslIneger
        if (isNil(v)) {
            v = '0'; // Decimal 不支持传 空字符串
            this.__str = undefined;// 用包装类实现原生语言的空值
        } else if (v instanceof NaslLong) {
            this.fixedNum = v.fixedNum;
            this.__str = v.__str;
            this.value = v.value;
        } else if (v instanceof NaslDecimal) {
            this.fixedNum = v.fixedNum || 0; // 整数转小数  要默认保留几位小数？
            this.__str = v.__str;
            this.value = v.__str; // 用新的包装类在初始化字符串一次
        } else {
            if (v instanceof Date) {
                v = String(+v);
            }
            if (String(v).includes('.') && String(v).split('.')?.length === 2) {
                // v = String(v).split('.')[0];
                v = String(Number(v).toFixed(0)); // 整数类型传入小数 先取整再赋值
            }

            this.fixedNum = typeof v === 'string' ? v.length : v.toString().length;
            this.__str = v.toString();
            this.value = v;
        }
    }

    get length() {
        return this.__str?.length || 0;
    }

    get value() {
        return this.__value;
    }

    set value(v) {
        if (typeof v === 'string' || typeof v === 'number') {
            this.__value = Long.fromString(String(v));
        } else {
            this.__value = v;
        }
    }

    valueOf() {
        return this.value.toNumber();
    }

    toString() {
        if (!this.__str || this.__str === undefined)
            return undefined;
        const longValue = this.__str.includes('.') ? this.value.toString() : (this.__str || this.value);
        return window.$utils.ToString('nasl.core.Long', longValue);
    }

    toJSON() {
        return this.toString();
    }

    add(v) {
        // 整数 + 小数： 将整数扩充精度 当作小数*小数运算
        if (String(v).includes('.') || v instanceof NaslDecimal) {
            return new NaslDecimal(this.__str).add(new NaslDecimal(String(v)));
        }
        return this.binaryOperations(v, (targetValue) => this.value.add(targetValue));
    }

    minus(v) {
        if (String(v).includes('.') || v instanceof NaslDecimal) {
            return new NaslDecimal(this.__str).minus(new NaslDecimal(String(v)));
        }
        return this.binaryOperations(v, (targetValue) => this.value.sub(targetValue));
    }

    multiply(v) {
        if (String(v).includes('.') || v instanceof NaslDecimal) {
            return new NaslDecimal(this.__str).multiply(new NaslDecimal(String(v)));
        }
        // return this.binaryOperations(v, (targetValue) => this.value.mul(targetValue));
        const operationCb = (targetValue) => this.value.mul(targetValue);
        if (v === undefined || !v) {
            v = '0';
        }
        let result;
        if (v instanceof NaslLong) {
            result = operationCb(v.value);
        } else {
            result = operationCb((new NaslLong(v.toString()).value));
        }
        const resultStr = result.toString();

        return new NaslLong(resultStr);
    }

    divide(v) {
        if (String(v) === '0') {
            throw new Error('除数不能为 0');
        }
        const result = new NaslDecimal(this.__str).divide(new NaslDecimal(String(v)));
        return result;
    }

    mod(v) {
        // ，/ % 的除数是 0 时前端抛异常
        if (String(v) === '0') {
            throw new Error('除数不能为 0');
        }
        if (String(v).includes('.') || v instanceof NaslDecimal) {
            return new NaslDecimal(this.__str).mod(new NaslDecimal(String(v)));
        }
        const operationCb = (targetValue) => this.value.mod(targetValue);
        if (v === undefined || !v) {
            v = '0';
        }
        let result;
        if (v instanceof NaslLong) {
            result = operationCb(v.value);
        } else {
            result = operationCb((new NaslLong(v.toString()).value));
        }
        const resultStr = result.toString();

        return new NaslLong(resultStr);
    }

    binaryOperations(v, operationCb, precision = 0) {
        if (v === undefined || !v) {
            v = '0';
        }
        let vStr = '';
        let result;
        if (v instanceof NaslLong) {
            vStr = v.__str;
            result = operationCb(v.value);
        } else {
            //  数字 字符串 undefined Decimal
            vStr = v.toString();
            result = operationCb((new NaslLong(v.toString()).value));
        }
        // const resultStr = result.toFixed(Math.max(getPrecision(vStr), precision || getPrecision(this.__str)));
        const resultStr = result.toString();

        return new NaslLong(resultStr);
    }

    equals(target) {
        if (isNil(target)) {
            return target === this.__str || String(target) === this.__str;
        }
        if (target instanceof NaslLong || typeof target === 'string') {
            const targetValue = new NaslLong(target).value;
            const targetLength = new NaslLong(target).length;
            return this.value.equals(targetValue) && targetLength === this.length;
        } else {
            return String(target) === this.__str;
        }
    }

    gt(target) {
        return this.value.gt(new NaslLong(target).value);
    }

    gte(target) {
        return this.value.gte(new NaslLong(target).value);
    }

    lt(target) {
        return this.value.lt(new NaslLong(target).value);
    }

    lte(target) {
        return this.value.lte(new NaslLong(target).value);
    }
}

