import { naslAdd, naslMinus, naslTimes, naslDividedBy, naslModulo, naslEquals, naslGreaterThan, naslGreaterThanOrEqual, naslLessThan, naslLessThanOrEqual, naslNotEqual } from '@/plugins/dataTypes/operations';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';
import { utils } from '@/plugins/utils';// 此文件引用了dataTypes/tools  tools 引用了组件库 组件库无法执行暂时注释

jest.mock('cloud-ui.vusion', () => ({

}));

window.$utils = utils;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

function sExp(symbol, a, b, className, targetClassName) {
    if (!targetClassName) {
        targetClassName = className;
    }
    const m = {
        '+': naslAdd,
        '-': naslMinus,
        '*': naslTimes,
        '/': naslDividedBy,
        '%': naslModulo,
        equals: naslEquals,
        gt: naslGreaterThan,
        gte: naslGreaterThanOrEqual,
        lt: naslLessThan,
        lte: naslLessThanOrEqual,
    };
    const NaslA = new window[className](a);
    const NaslB = targetClassName === 'String' ? String(b) : new window[targetClassName](b);
    return m[symbol](NaslA, NaslB);
}

describe('global/app/packingType', () => {
    test('binaryOperations', () => {
        const errMsg = '除数不能为 0';

        // 不同类型运算
        expect(sExp('*', '10', '0.12', 'NaslLong', 'NaslDecimal')?.__str).toBe('1.20');

        expect(sExp('+', '10', '0.12', 'NaslLong', 'NaslDecimal')?.__str).toBe('10.12');
        expect(sExp('-', '10', '0.12', 'NaslLong', 'NaslDecimal')?.__str).toBe('9.88');
        expect(sExp('-', '10', '0.12', 'NaslLong', 'String')?.__str).toBe('9.88');
        expect(sExp('*', '10', '0.12', 'NaslLong', 'String')?.__str).toBe('1.2');

        // 同类型运算
        expect(sExp('/', '10', '2', 'NaslLong')?.__str).toBe('5');
        expect(sExp('/', '12', '12', 'NaslLong')?.__str).toBe('1');
        expect(sExp('/', '10', '3', 'NaslLong')?.__str).toBe('3.3333333333333333333');
        // expect(() => sExp('/', '1', '0', 'NaslLong')).toThrow(errMsg);
        // expect(() => sExp('/', '-0', '0', 'NaslLong')).toThrow(errMsg);
        // expect(() => sExp('%', '0', '0', 'NaslLong')).toThrow(errMsg);

        expect(sExp('/', '10', '2', 'NaslLong', 'String')?.__str).toBe('5');
        // expect(() => sExp('/', '1', '0', 'NaslLong', 'String')).toThrow(errMsg);
        // expect(() => sExp('/', '-0', '0', 'NaslLong', 'String')).toThrow(errMsg);
        // expect(() => sExp('%', '0', '0', 'NaslLong', 'String')).toThrow(errMsg);

        expect(sExp('/', '12', '12', 'NaslDecimal')?.__str).toBe('1');
        expect(sExp('/', '2.0', '2', 'NaslDecimal')?.__str).toBe('1.0');
        expect(sExp('+', '0.06', '0.04', 'NaslDecimal')?.__str).toBe('0.10');
        expect(sExp('+', '0.05', '-0.05', 'NaslDecimal')?.__str).toBe('0.00');
        expect(sExp('+', '-0.05', '0.05', 'NaslDecimal')?.__str).toBe('0.00');
        expect(sExp('*', '1.2', '0.8', 'NaslDecimal')?.__str).toBe('0.96');
        expect(sExp('*', '2.0', '2', 'NaslDecimal')?.__str).toBe('4.0');
        expect(sExp('/', '1', '3', 'NaslDecimal')?.__str).toBe('0.33333333333333333333');
        expect(sExp('/', '0.5', '0.02', 'NaslDecimal')?.__str).toBe('25');
        expect(sExp('*', '0.19', '0.190', 'NaslDecimal')?.__str).toBe('0.03610');
        expect(sExp('%', '2.66', '-0.2', 'NaslDecimal')?.__str).toBe('0.06');
        expect(sExp('%', '-2.66', '0.2', 'NaslDecimal')?.__str).toBe('-0.06');
        // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(Error);
        // expect(() => sExp('/', '1', '0', 'NaslDecimal')).toThrow(errMsg);
        // expect(() => sExp('/', '-0', '0', 'NaslDecimal')).toThrow(errMsg);
        // expect(() => sExp('%', '2.66', '0', 'NaslDecimal')).toThrow(errMsg);
        // expect(() => sExp('%', '0', '0', 'NaslDecimal')).toThrow(errMsg);
        expect(sExp('/', '0.5', '0.02', 'NaslDecimal', 'String')?.__str).toBe('25');
        expect(sExp('%', '2.66', '-0.2', 'NaslDecimal', 'String')?.__str).toBe('0.06');
        expect(sExp('%', '-2.66', '0.2', 'NaslDecimal', 'String')?.__str).toBe('-0.06');
        // expect(() => sExp('/', '1', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        // expect(() => sExp('/', '-0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        // expect(() => sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        // expect(() => sExp('%', '0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    });

    test('comparisonOperator', () => {
        const variable1 = new window.NaslDecimal('2.100');
        const variable2 = new window.NaslDecimal('2.100');
        const variable3 = new window.NaslDecimal('2.10');
        const variable4 = new window.NaslDecimal('1.10');
        expect(sExp('equals', variable1, variable2, 'NaslDecimal', 'NaslDecimal')).toBe(true);
        expect(sExp('equals', variable1, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(false);
        expect(sExp('lt', variable4, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(true);

        expect(naslLessThanOrEqual(new NaslDecimal('1'), 'A')).toBe(false);
        expect(naslLessThanOrEqual('1', 'A')).toBe(true);
        expect(naslLessThanOrEqual('1', 'A')).toBe(true);
    });

    test('< 3.3.x 算术运算兼容性测试', () => {
        // < 3.3.x 兼容性，3.4 就改。傻逼 js。
        // 这些单测错了不要乱改，联系令浩或者子润。
        expect(sExp('+', '10', '0.12', 'NaslLong', 'String')).toBe('100.12');
        expect(sExp('+', '0.06', '0.04', 'NaslDecimal', 'String')).toBe('0.060.04');
        expect(sExp('+', '0.05', '-0.05', 'NaslDecimal', 'String')).toBe('0.05-0.05');
        expect(sExp('+', '-0.05', '0.05', 'NaslDecimal', 'String')).toBe('-0.050.05');
        expect(sExp('/', '1', '3', 'NaslLong', 'String')?.__str).toBe('0.3333333333333333');
        expect(sExp('/', '1', '3', 'NaslDecimal', 'String')?.__str).toBe('0.3333333333333333');
        expect(sExp('/', '1', '0', 'NaslLong', 'String')).toBe(Infinity);
        expect(sExp('/', '-0', '0', 'NaslLong', 'String')).toBe(NaN);
        expect(sExp('%', '0', '0', 'NaslLong', 'String')).toBe(NaN);
        expect(sExp('/', '1', '0', 'NaslLong')).toBe(Infinity);
        expect(sExp('/', '-0', '0', 'NaslLong')).toBe(NaN);
        expect(sExp('%', '0', '0', 'NaslLong')).toBe(NaN);
        expect(sExp('/', '1', '0', 'NaslDecimal')).toBe(Infinity);
        expect(sExp('/', '-0', '0', 'NaslDecimal')).toBe(NaN);
        expect(sExp('%', '2.66', '0', 'NaslDecimal')).toBe(NaN);
        expect(sExp('%', '0', '0', 'NaslDecimal')).toBe(NaN);
        expect(sExp('-', 'NaN', '0.12', 'String', 'NaslDecimal')).toBe(NaN);
        expect(sExp('-', '0.12', 'NaN', 'NaslDecimal', 'String')).toBe(NaN);

        expect(naslAdd(null, '1')).toBe('null1');
        expect(naslAdd('1', null)).toBe('1null');
        expect(naslAdd(undefined, '1')).toBe('undefined1');
        expect(naslAdd('1', undefined)).toBe('1undefined');

        expect(naslAdd(undefined, new NaslDecimal('1'))).toBe(NaN);
        expect(naslAdd(new NaslDecimal('1'), undefined)).toBe(NaN);
        expect(naslAdd(undefined, new NaslLong('1'))).toBe(NaN);
        expect(naslAdd(new NaslLong('1'), undefined)).toBe(NaN);

        expect(naslAdd(null, new NaslDecimal('1'))).toEqual(new NaslDecimal('1'));
        expect(naslAdd(new NaslDecimal('1'), null)).toEqual(new NaslDecimal('1'));
        expect(naslAdd(null, new NaslLong('1'))).toEqual(new NaslDecimal('1'));
        expect(naslAdd(new NaslLong('1'), null)).toEqual(new NaslDecimal('1'));

        expect(naslTimes(new NaslLong('10'), null)).toEqual(new NaslDecimal('0'));
        expect(naslDividedBy(new NaslLong('10'), null)).toBe(Infinity);

        expect(sExp('/', '1', '0', 'NaslDecimal', 'String')).toBe(Infinity);
        expect(sExp('/', '-0', '0', 'NaslDecimal', 'String')).toBe(NaN);
        expect(sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toBe(NaN);
        expect(sExp('%', '0', '0', 'NaslDecimal', 'String')).toBe(NaN);
    });

    test('< 3.3.x 关系运算兼容性测试', () => {
        expect(naslLessThan(new NaslDecimal('1.1'), NaN)).toBe(false);
        expect(naslLessThan('1.1', NaN)).toBe(false);
        expect(naslGreaterThan(new NaslDecimal('1.1'), null)).toBe(true);
        expect(naslGreaterThanOrEqual(new NaslDecimal('0'), null)).toBe(true);
        expect(naslLessThanOrEqual(new NaslDecimal('0'), null)).toBe(true);
        expect(naslLessThanOrEqual(undefined, undefined)).toBe(false);
        expect(naslEquals(new NaslDecimal('0'), null)).toBe(false);
        expect(naslEquals(undefined, undefined)).toBe(true);
        expect(naslEquals(null, null)).toBe(true);
        expect(naslNotEqual(undefined, undefined)).toBe(false);
        expect(naslNotEqual(null, null)).toBe(false);
    });
});
