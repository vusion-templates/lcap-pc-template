import { utils } from '@/plugins/utils/index.js';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

window.$utils = utils;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

jest.mock('cloud-ui.vusion', () => ({

}));

describe('List arithmetic (aggregation) functions', () => {
    const fns = [utils.ListMax, utils.ListMin, utils.ListSum, utils.ListProduct, utils.ListAverage];
    test('测试非正常输入', () => {
        fns.forEach(fn => {
            expect(fn(undefined)).toBeNull;
        });

        fns.forEach(fn => {
            expect(fn(null)).toBeNull;
        });

        fns.forEach(fn => {
            expect(fn([])).toBeNull;
        });

        fns.forEach(fn => {
            expect(fn([undefined, null, null])).toBeNull;
        });
    });

    test('测试正常输入', () => {
        {
            const list = [new NaslDecimal('1'), new NaslDecimal('4'), null, new NaslDecimal('-2'), null];

            expect(utils.ListMax(list).__str).toBe('4');
            expect(utils.ListMin(list).__str).toBe('-2');
            expect(utils.ListAverage(list).__str).toBe('1');
            expect(utils.ListProduct(list).__str).toBe('-8');
            expect(utils.ListSum(list).__str).toBe('3');
        }

        {
            const list = [new NaslLong('1'), new NaslLong('4'), null, new NaslLong('-2'), null];
            expect(utils.ListMax(list).__str).toBe('4');
            expect(utils.ListMin(list).__str).toBe('-2');
            expect(utils.ListAverage(list).__str).toBe('1');
            expect(utils.ListProduct(list).__str).toBe('-8');
            expect(utils.ListSum(list).__str).toBe('3');
        }

        {
            const list = ['123', 'abc', 'abb'];
            expect(utils.ListMax(list)).toBe('abc');
            expect(utils.ListMin(list)).toBe('123');
        }

        {
            const list = ['111', 'aa', 'ab'];
            expect(utils.ListMax(list)).toBe('ab');
            expect(utils.ListMin(list)).toBe('111');
        }
    });

    test('测试数值精度', () => {
        const list = [undefined, new NaslDecimal('0.8'), new NaslDecimal('1.2'), null, null];

        expect(utils.ListSum(list).__str).toBe('2.0');
        expect(utils.ListProduct(list).__str).toBe('0.96');
        expect(utils.ListAverage(list).__str).toBe('1.0');

        const list2 = ['1.2', '2.4', '6.4'];
        expect(utils.ListSum(list2)).toEqual(new NaslDecimal('10.0'));
    });

    test('QA 给的用例', () => {
        expect(utils.ListMax([new NaslDecimal('-1.1'), null, null, new NaslDecimal('-2.2')]).__str).toBe('-1.1');
        expect(utils.ListAverage([null, new NaslDecimal('1.5'), new NaslDecimal('2.5'), new NaslDecimal('3.5')]).__str).toBe('2.5');
        expect(utils.ListAverage([new NaslDecimal('-1.1'), null, null, new NaslDecimal('-2.2')]).__str).toBe('-1.65');
        expect(utils.ListProduct([new NaslDecimal('-1.1'), null, null, new NaslDecimal('-2.2')]).__str).toBe('2.42');
        expect(utils.ListAverage([new NaslDecimal('0.2'), new NaslDecimal('0.2'), new NaslDecimal('0.2'), null, null]).__str).toBe('0.2');
    });
});
