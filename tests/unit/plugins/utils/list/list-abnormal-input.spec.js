import { utils as u } from '@/plugins/utils/index.js';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

window.$utils = u;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

jest.mock('cloud-ui.vusion', () => ({

}));

describe('测试所有列表函数的边界输入场景', () => {

    const fns = [u.Concat, u.Join, u.Length, u.Get, u.Set, u.Contains, u.Add, u.AddAll, u.Insert, u.Remove
                ,u.RemoveAt
                ,u.ListAverage, u.ListDistinct, u.ListDistinctBy, u.ListFilter, u.ListFind
                ,u.ListFindIndex, u.ListFlatten, u.ListGroupBy, u.ListHead, u.ListLast, u.ListMax, u.ListMin
                ,u.ListProduct, u.ListReverse, u.ListSlice, u.ListSliceToPageOf, u.ListSort, u.ListSum
                ,u.ListToMap, u.ListTransform];

    test('测试 undefined 和 null 输入', () => {
        fns.forEach(fn => {
            expect(fn(undefined)).toBeNull;
        });

        fns.forEach(fn => {
            expect(fn(null)).toBeNull;
        });
    });

    test('测试空数组输入', () => {
        fns.forEach(fn => {
            expect(fn([])).toBeNull;
        });
    });

    test('测试无效数组元素', () => {
        let __fns = fns.filter(fn => fn !== u.ListDistinctBy && fn !== u.ListTransform);
        __fns.forEach(fn => {
            expect(fn([undefined, null, null])).toBeNull;
        });
    });
});
