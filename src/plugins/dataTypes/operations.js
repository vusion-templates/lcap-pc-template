'use strict';

import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

export const isNaslNumber = (v) => v instanceof window.NaslDecimal || v instanceof window.NaslLong;
export const isNaslDecimal = (v) => v instanceof window.NaslDecimal;
export const isNaslLong = (v) => v instanceof window.NaslLong;
export const isUnhandledVal = (v) => [NaN, Infinity, -Infinity, undefined].includes(v);
const isUnhandledValStr = (v) => ['NaN', 'Infinity', '-Infinity', 'undefined'].includes(v);
const isNumberStr = (str) => /^[-+]?\d+(\.\d+)?$/.test(str);

// side effects. 使用副作用修改操作数
function operandImplicitConversion(wrapper) {
    if (isNaslNumber(wrapper.x) && typeof wrapper.y === 'number') {
        wrapper.y = Number.isInteger(wrapper.y) ? new NaslLong(wrapper.y) : new NaslDecimal(wrapper.y);
    } else if (isNaslNumber(wrapper.y) && typeof x === 'number') {
        wrapper.x = Number.isInteger(wrapper.x) ? new NaslLong(wrapper.x) : new NaslDecimal(wrapper.x);
    } else if (isNaslDecimal(wrapper.x) && isNaslLong(wrapper.y)) {
        wrapper.y = new NaslDecimal(wrapper.y);
    } else if (isNaslDecimal(wrapper.y) && isNaslLong(wrapper.x)) {
        wrapper.x = new NaslDecimal(wrapper.x);
    }
    return [wrapper.x, wrapper.y];
}

const opMap = {
    add: (x, y) => x + y,
    minus: (x, y) => x - y,
    times: (x, y) => x * y,
    dividedBy: (x, y) => x / y,
    modulo: (x, y) => x % y,
    // 危险，不能冒然修改成 ===
    equals: (x, y) => x == y,
    // 危险，不能冒然修改成 !==
    notEqual: (x, y) => x != y,
    greaterThan: (x, y) => x > y,
    greaterThanOrEqual: (x, y) => x >= y,
    lessThan: (x, y) => x < y,
    lessThanOrEqual: (x, y) => x <= y,
};

const shouldRunJSBuiltinOperation = (x, y, op) => {
    // 字符串 + 语义太多，包装类不处理
    if (op === 'add' && (typeof x === 'string' || typeof y === 'string')) {
        return true;
    }
    // 特殊值 NaN, Infinity, -Infinity, undefined 语义复杂，包装类不处理
    if (isNaslNumber(x) && isUnhandledValStr(x.__str)) {
        return true;
    }
    if (isNaslNumber(y) && isUnhandledValStr(y.__str)) {
        return true;
    }
    return false;
};

const runJSBuiltinArithOperation = (x, y, op) => {
    let xx = isNaslNumber(x) ? eval(x.__str) : x;
    let yy = isNaslNumber(y) ? eval(y.__str) : y;

    const jsBuiltInRes = opMap[op](xx, yy);
    if (isUnhandledVal(jsBuiltInRes)) {
        return jsBuiltInRes;
    }

    // 尽量返回包装类
    if (typeof jsBuiltInRes === 'number') {
        if (isNaslDecimal(x) || isNaslDecimal(y)) {
            return new NaslDecimal(jsBuiltInRes);
        } else {
            return Number.isInteger(jsBuiltInRes)
                ? new NaslLong(jsBuiltInRes)
                : new NaslDecimal(jsBuiltInRes);
        }
    }
    return jsBuiltInRes;
};

const runJSBuiltInRelationalOperation = (x, y, op) => {
    x = isNaslNumber(x) ? eval(x.__str) : x;
    y = isNaslNumber(y) ? eval(y.__str) : y;
    return opMap[op](x, y);
};

const dispatchBinaryArithOperation = (x, y, op) => {
    if (isNumberStr(x) && isNumberStr(y)) {
        x = new window.NaslDecimal(x);
        y = new window.NaslDecimal(y);
    }
    if (shouldRunJSBuiltinOperation(x, y, op)) {
        return runJSBuiltinArithOperation(x, y, op);
    }

    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx[op](yy);
    }
    return runJSBuiltinArithOperation(xx, yy, op);
};

const dispatchBinaryRelationalOperation = (x, y, op) => {
    if (shouldRunJSBuiltinOperation(x, y, op)) {
        return runJSBuiltInRelationalOperation(x, y, op);
    }

    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx[op](yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, op);
};

export function naslAdd(x, y) {
    return dispatchBinaryArithOperation(x, y, 'add');
}

// 减
export function naslMinus(x, y) {
    return dispatchBinaryArithOperation(x, y, 'minus');
}

// 乘
export function naslTimes(x, y) {
    return dispatchBinaryArithOperation(x, y, 'times');
}

// 除
export function naslDividedBy(x, y) {
    return dispatchBinaryArithOperation(x, y, 'dividedBy');
}

// 取余
export function naslModulo(x, y) {
    return dispatchBinaryArithOperation(x, y, 'modulo');
}

// 相等
export function naslEquals(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'equals');
}

// 不相等
export function naslNotEqual(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'notEqual');
}

// 大于
export function naslGreaterThan(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'greaterThan');
}

// 大于等于
export function naslGreaterThanOrEqual(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'greaterThanOrEqual');
}

// 小于
export function naslLessThan(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'lessThan');
}

// 小于等于
export function naslLessThanOrEqual(x, y) {
    return dispatchBinaryRelationalOperation(x, y, 'lessThanOrEqual');
}
