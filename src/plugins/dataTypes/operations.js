'use strict';

import { NaslDecimal, NaslLong, isNil } from '@/plugins/dataTypes/packingType';

export const isNaslNumber = (v) => v instanceof window.NaslDecimal || v instanceof window.NaslLong;
export const isNaslDecimal = (v) => v instanceof window.NaslDecimal;
export const isNaslLong = (v) => v instanceof window.NaslLong;

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

// const jsCompatibleAdd(x, y) {
//     if (typeof x === 'string') {
//         return x + String(y);
//     } else if (typeof y === 'string') {
//         return String(x) + y;
//     }
// }


const runJSBuiltinArithOperation = (x, y, op) => {
    let xx = isNaslNumber(x) ? eval(x.__str) : x;
    let yy = isNaslNumber(y) ? eval(y.__str) : y;

    const jsBuiltInRes = opMap[op](xx, yy);
    if (['Infinity', '-Infinity', 'NaN', 'undefined', 'null'].includes(String(jsBuiltInRes))) {
        return jsBuiltInRes;
    }
    if (typeof jsBuiltInRes === 'number') {
        if (isNaslDecimal(x) || isNaslDecimal(y)) {
            return new NaslDecimal(jsBuiltInRes);
        } else {
            return Number.isInteger(jsBuiltInRes) ? new NaslLong(jsBuiltInRes) : new NaslDecimal(jsBuiltInRes);
        }
    }
    return jsBuiltInRes;

    // if (isNaslDecimal(x)) {
    //     x = Number(x.__str);
    //     return new NaslDecimal('' + opMap[op](x, y));
    // }
    // if (isNaslLong(x)) {
    //     // Nasl 要求操作数类型相同，NaslLong(1) * '0.3' 这种视为未定义行为，返回 NaslDecimal 都是给面子了
    //     x = Number(x.__str);
    //     return new NaslDecimal('' + opMap[op](x, y));
    // }

    // if (isNaslDecimal(y)) {
    //     y = Number(y.__str);
    //     return new NaslDecimal('' + opMap[op](x, y));
    // }
    // if (isNaslLong(y)) {
    //     y = Number(y.__str);
    //     return new NaslDecimal('' + opMap[op](x, y));
    // }
    // return jsBuiltInRes;
};

const runJSBuiltInRelationalOperation = (x, y, op) => {
    x = isNaslNumber(x) ? eval(x.__str) : x;
    y = isNaslNumber(y) ? eval(y.__str) : y;
    return opMap[op](x, y);
};

export function naslAdd(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        // 支持高精度和number/string相加 不限制被加数
        return xx.add(yy);
    }
    return runJSBuiltinArithOperation(xx, yy, 'add');
}

// 减
export function naslMinus(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.minus(yy);
    }

    return runJSBuiltinArithOperation(xx, yy, 'minus');
}

// 乘
export function naslTimes(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.times(yy);
    }

    return runJSBuiltinArithOperation(xx, yy, 'times');
}

// 除
export function naslDividedBy(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.dividedBy(yy);
    }

    return runJSBuiltinArithOperation(xx, yy, 'dividedBy');
}

// 取余
export function naslModulo(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.modulo(yy);
    }

    return runJSBuiltinArithOperation(xx, yy, 'modulo');
}

// 相等
export function naslEquals(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return x.equals(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'equals');
}

// 不相等
export function naslNotEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return !x.equals(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'notEqual');
}

// 大于
export function naslGreaterThan(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.gt(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'greaterThan');
}

// 大于等于
export function naslGreaterThanOrEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.gte(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'greaterThanOrEqual');
}

// 小于
export function naslLessThan(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.lt(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'lessThan');
}

// 小于等于
export function naslLessThanOrEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.lte(yy);
    }
    return runJSBuiltInRelationalOperation(xx, yy, 'lessThanOrEqual');
}
