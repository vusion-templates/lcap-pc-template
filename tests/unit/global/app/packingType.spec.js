import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';
// import { utils } from '@/plugins/utils';// 此文件引用了dataTypes/tools  tools 引用了组件库 组件库无法执行暂时注释

// window.utils = utils;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

function sExp(symbol, a, b, className, targetClassName) {
    if (!targetClassName) {
        targetClassName = className;
    }
    const map = {
        '+': 'add',
        '-': 'minus',
        '*': 'multiply',
        '/': 'divide',
        '%': 'mod',
        equals: 'equals',
        gt: 'gt',
        gte: 'gte',
        lt: 'lt',
        lte: 'lte',
    };
    const NaslA = new window[className](a);
    const NaslB = new window[targetClassName](b);
    return NaslA[map[symbol]](NaslB);
}

describe('global/app/packingType', () => {
    0 && test('binaryOperations', () => {
        const errMsg = '除数不能为 0';
        expect(sExp('+', '0.06', '0.04', 'NaslDecimal')?.__str).toBe('0.10');
        expect(sExp('+', '0.05', '-0.05', 'NaslDecimal')?.__str).toBe('0.00');
        expect(sExp('+', '-0.05', '0.05', 'NaslDecimal')?.__str).toBe('0.00');
        expect(sExp('/', '1', '3', 'NaslDecimal')?.__str).toBe('0.33333333333333333333');
        expect(sExp('/', '0.5', '0.02', 'NaslDecimal')?.__str).toBe('25');
        expect(sExp('%', '2.66', '-0.2', 'NaslDecimal')?.__str).toBe('0.06');
        expect(sExp('%', '-2.66', '0.2', 'NaslDecimal')?.__str).toBe('-0.06');
        // expect(sExp('/', '1', '0', 'NaslDecimal')).toThrow(Error);
        expect(sExp('/', '1', '0', 'NaslDecimal')).toThrow(errMsg);
        expect(sExp('/', '-0', '0', 'NaslDecimal')).toThrow(errMsg);
        expect(sExp('%', '2.66', '0', 'NaslDecimal')).toThrow(errMsg);
        expect(sExp('%', '0', '0', 'NaslDecimal')).toThrow(errMsg);

        expect(sExp('+', '0.06', '0.04', 'NaslDecimal', 'String')?.__str).toBe('0.10');
        expect(sExp('+', '0.05', '-0.05', 'NaslDecimal', 'String')?.__str).toBe('0.00');
        expect(sExp('+', '-0.05', '0.05', 'NaslDecimal', 'String')?.__str).toBe('0.00');
        expect(sExp('/', '1', '3', 'NaslDecimal', 'String')?.__str).toBe('0.33333333333333333333');
        expect(sExp('/', '0.5', '0.02', 'NaslDecimal', 'String')?.__str).toBe('25');
        expect(sExp('%', '2.66', '-0.2', 'NaslDecimal', 'String')?.__str).toBe('0.06');
        expect(sExp('%', '-2.66', '0.2', 'NaslDecimal', 'String')?.__str).toBe('-0.06');
        expect(sExp('/', '1', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        expect(sExp('/', '-0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        expect(sExp('%', '2.66', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
        expect(sExp('%', '0', '0', 'NaslDecimal', 'String')).toThrow(errMsg);
    });
    test('comparisonOoperator', () => {
        const variable1 = new window.NaslDecimal('2.100');
        const variable2 = new window.NaslDecimal('2.100');
        const variable3 = new window.NaslDecimal('2.10');
        const variable4 = new window.NaslDecimal('1.10');
        // expect(sExp('equals', variable1, variable2, 'NaslDecimal', 'NaslDecimal')).toBe(true);
        // expect(sExp('equals', variable1, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(false);
        // expect(sExp('lt', variable4, variable3, 'NaslDecimal', 'NaslDecimal')).toBe(true);
    });
});
