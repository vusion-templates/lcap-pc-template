import Long from 'long';
import { Decimal } from 'decimal.js';
// const Long = require('long')
// const Decimal = require('decimal.js')

// 方舟建议这边使用 js 原生的 binInt 这块 应该是必改
// bigInt 可以表示任意大小的值  但是只能 和同类型相加
// BigInt(9007199254740991) + 100000000000000000000000000000000000000000000000000000000000000000n
// 100000000000000000000000000000000000000000000000009007199254740991n

export class NaslInteger {
    __value = new Long(0)// 使用 long：https://www.npmjs.com/package/long

    constructor(v) {
        if (v === undefined || !v) {
            v = '';
        }
        this.value = v;
    }

    get value() {
        return this.__value;
    }

    set value(v) {
        if (typeof v === 'string') {
            this.__value = Long.fromString(v);
        } else {
            this.__value = v;
        }
    }

    // 不断地 box unbox 导致运行效率较低，考虑类型检查后直接使用 Long 类型
    add(v) {
        return new NaslInteger(this.value.add(v.value));
    }
}

export class NaslDecimal {
    __value = new Decimal(0)// 使用 decimal.js

    constructor(v) {
        // todo: 兼容 undefined 空
        if (v === undefined || !v) {
            v = '';
            // 之前的默认值是 ’‘  空字符串  我这要是改成空字符串是不是运算有问题
            // 之前的运算'' + ''  ='' 再转number 变成了NaN 保持一致即可
        }
        this.value = v;
    }

    get value() {
        return this.__value;
    }

    set value(v) {
        if (typeof v === 'string') {
            this.__value = new Decimal(v);
        } else {
            this.__value = v;
        }
    }

    // 直接处理掉隐式类型转换
    add(v) {
        // todo: 如果运算后需要保留后缀0 要保留两个相加值的最大长度 再在return之前写个padEnd
        // const str = '123.1';
        // const paddedStr = str.padEnd(7, '0')  '123.100'
        console.log('v instanceof NaslDecimal: ', v instanceof NaslDecimal);
        if (v instanceof NaslDecimal) {
            return new NaslDecimal(this.value.add(v.value));
        } else {
            // this.value.add( 这个add 就是Decimal 或者Long 字段的add方法了
            return new NaslDecimal(this.value.add((new NaslDecimal(v.toString()).value)));
        }
    }
}

