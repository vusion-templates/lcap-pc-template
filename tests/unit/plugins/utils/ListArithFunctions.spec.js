import { utils } from '@/plugins/utils/index.js';
jest.mock('cloud-ui.vusion', () => ({

}))

describe('Arithmetic functions', () => {
    const fns = [utils.ListMax, utils.ListMin, utils.ListSum, utils.ListProduct, utils.ListAverage];
    test('Test null input', () => {
        fns.forEach( fn => {
            expect(fn(null)).toBeNull;
        })
    })

    test('Test empty list input', () => {
        fns.forEach( fn => {
            expect(fn([])).toBeNull;
        })
    })

    test('Test list [null, null]', () => {
        fns.forEach( fn => {
            expect(fn([null, null])).toBeNull;
        })
    })

    test('Test list [1, 2, null, -2, null]', () => {
        const list = [1, 4, null, -2, null];

        expect(utils.ListMax(list)).toBe(4);
        expect(utils.ListMin(list)).toBe(-2);
        expect(utils.ListAverage(list)).toBe(1);
        expect(utils.ListProduct(list)).toBe(-8);
        expect(utils.ListSum(list)).toBe(3);
    })

    test('Test operation precision', () => {
        expect(utils.ListSum([0.1, 0.2])).toBe(0.3);
    })

    test('QA 给的用例', () => {
        expect(utils.ListMax([-1.1,null,null,-2.2])).toBe(-1.1);
        expect(utils.ListAverage([null,1.5,2.5,3.5])).toBe(2.5);
        expect(utils.ListAverage([-1.1,null,null,-2.2])).toBe(-1.65);
        expect(utils.ListProduct([-1.1,null,null,-2.2])).toBe(2.42);
        expect(utils.ListAverage([0.2, 0.2, 0.2, null, null])).toBe(0.2);
    })
});

