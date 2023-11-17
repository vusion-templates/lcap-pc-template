'use strict';

import { NaslDecimal } from '@/plugins/dataTypes/packingType';

export const isNaslNumber = (v) => v instanceof window.NaslDecimal || v instanceof window.NaslLong;
export const isNaslDecimal = (v) => v instanceof window.NaslDecimal;
export const isNaslLong = (v) => v instanceof window.NaslLong;

// side effects. 使用副作用修改操作数
function operandImplicitConversion(wrapper) {
    if (isNaslDecimal(wrapper.x) && isNaslLong(wrapper.y)) {
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

// const jsCompatibleResult = (x, y, op) => {
//     if (op === 'add') {
//         return jsCompatibleAdd(x, y);
//     }
//     if (op === 'minus') {
//         return jsCompatibleMinus(x, y);
//     }
//     if (op === 'times') {
//         return jsCompatibleTimes(x, y);
//     }
//     if (op === 'dividedBy') {
//         return jsCompatibleDividedBy(x, y);
//     }
//     if (op === 'modulo') {
//         return jsCompatibleModulo(x, y);
//     }
//     if (op === 'equals') {
//         return jsCompatibleEquals(x, y);
//     }
//     if (op === 'notEqual') {
//         return jsCompatibleNotEqual(x, y);
//     }
//     if (op === 'greaterThan') {
//         return jsCompatibleGreaterThan(x, y);
//     }
//     if (op === 'greaterThanOrEqual') {
//         return jsCompatibleGreaterThanOrEqual(x, y);
//     }
//     if (op === 'lessThan') {
//         return jsCompatibleLessThan(x, y);
//     }
//     if (op === 'lessThanOrEqual') {
//         return jsCompatibleLessThanOrEqual(x, y);
//     }
// }

// const jsCompatibleAdd(x, y) {
//     if (typeof x === 'string') {
//         return x + String(y);
//     } else if (typeof y === 'string') {
//         return String(x) + y;
//     }
// }


const runArithOperationAndWrapNaslType = (x, y, op) => {
    if (x === null) {
        x = 0;
    }
    if (y === null) {
        y = 0;
    }

    const jsBuiltInRes = opMap[op](x, y);
    if (['Infinity', '-Infinity', 'NaN', 'undefined', 'null'].includes(String(jsBuiltInRes))) {
        return jsBuiltInRes;
    }

    if (isNaslDecimal(x)) {
        x = Number(x.__str);
        return new NaslDecimal('' + opMap[op](x, y));
    }
    if (isNaslLong(x)) {
        // Nasl 要求操作数类型相同，NaslLong(1) * '0.3' 这种视为未定义行为，返回 NaslDecimal 都是给面子了
        x = Number(x.__str);
        return new NaslDecimal('' + opMap[op](x, y));
    }

    if (isNaslDecimal(y)) {
        y = Number(y.__str);
        return new NaslDecimal('' + opMap[op](x, y));
    }
    if (isNaslLong(y)) {
        y = Number(y.__str);
        return new NaslDecimal('' + opMap[op](x, y));
    }
    return jsBuiltInRes;
};

const runRelationalOperationAndWrapNaslType = (x, y, op) => {
    if (isNaslNumber(x)) {
        x = x.__str ? Number(x.__str) : eval(x.__str);
    }
    if (isNaslNumber(y)) {
        y = y.__str ? Number(y.__str) : eval(y.__str);
    }
    return opMap[op](x, y);
};

export function naslAdd(x, y) {
    if (typeof x === 'string') {
        return x + String(y);
    } else if (typeof y === 'string') {
        return String(x) + y;
    }

    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        // 支持高精度和number/string相加 不限制被加数
        return xx.add(yy);
    }
    return runArithOperationAndWrapNaslType(xx, yy, 'add');
}

// 减
export function naslMinus(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.minus(yy);
    }

    return runArithOperationAndWrapNaslType(xx, yy, 'minus');
}

// 乘
export function naslTimes(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.times(yy);
    }

    return runArithOperationAndWrapNaslType(xx, yy, 'times');
}

// 除
export function naslDividedBy(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.dividedBy(yy);
    }

    return runArithOperationAndWrapNaslType(xx, yy, 'dividedBy');
}

// 取余
export function naslModulo(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.modulo(yy);
    }

    return runArithOperationAndWrapNaslType(xx, yy, 'modulo');
}

// 相等
export function naslEquals(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return x.equals(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'equals');
}

// 不相等
export function naslNotEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return !x.equals(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'notEqual');
}

// 大于
export function naslGreaterThan(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.gt(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'greaterThan');
}

// 大于等于
export function naslGreaterThanOrEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.gte(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'greaterThanOrEqual');
}

// 小于
export function naslLessThan(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.lt(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'lessThan');
}

// 小于等于
export function naslLessThanOrEqual(x, y) {
    const [xx, yy] = operandImplicitConversion({ x, y });
    if (isNaslNumber(xx) && isNaslNumber(yy)) {
        return xx.lte(yy);
    }
    return runRelationalOperationAndWrapNaslType(xx, yy, 'lessThanOrEqual');
}
