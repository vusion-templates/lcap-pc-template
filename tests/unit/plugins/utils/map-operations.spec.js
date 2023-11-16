import { utils as u } from '@/plugins/utils/index.js';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

jest.mock('cloud-ui.vusion', () => ({

}));

window.$utils = u;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

describe('Map 测试', () => {
    test('MapGet MapPut', () => {
        {
            const testMap = { };
            u.MapPut(testMap, new NaslDecimal('1.0'), '123');
            u.MapPut(testMap, new NaslDecimal('1.00'), '456');
            expect(u.Length(testMap)).toBe(1);
            expect(u.MapGet(testMap, new NaslDecimal('1'))).toBe('456');
        }
    });

    // test('去重数值包装类', () => {
    //     {
    //         const ansAsc = [new NaslLong('-100'), new NaslLong('0'), new NaslLong('100')];
    //         const testArr1 = [new NaslLong(-100), new NaslLong('0'), new NaslLong('100'), new NaslLong('0'),
    //             new NaslLong('0'), new NaslLong('100'), new NaslLong('-100')];
    //         u.ListDistinct(testArr1);
    //         expect(ansAsc).toEqual(testArr1);
    //     }

    //     {
    //         const ansAsc = [new NaslDecimal('-100.0'), new NaslDecimal('0.0'), new NaslDecimal('100'), new NaslDecimal('0.00')];
    //         const testArr1 = [new NaslDecimal('-100.0'), new NaslDecimal('0.0'), new NaslDecimal('100'), new NaslDecimal('0.00'),
    //             new NaslDecimal('0.0'), new NaslDecimal('100'), new NaslDecimal('-100.0')];
    //         u.ListDistinct(testArr1);
    //         expect(ansAsc).toEqual(testArr1);
    //     }
    // });

    // test('去重数值包装类 2', () => {
    //     const obj1 = { name: "Zhang San", gender: "M", age: new NaslLong('18') };
    //     const obj2 = { name: "Li Si", gender: "M", age: new NaslLong('20') };
    //     const obj3 = { name: "Wang Wu", gender: "F", age: new NaslLong('19') };

    //     // name 升序
    //     const ansAsc = [obj1, obj2, obj3];
    //     // TODO：目前只支持按 Reference 内存地址去重
    //     const testArr1 = [obj1, obj2, obj3, obj2];
    //     u.ListDistinct(testArr1);
    //     expect(ansAsc).toEqual(testArr1);
    // });

    // test('去重字符串', () => {
    //     {
    //         const ansAsc = ['abc', 'ab'];
    //         const testArr1 = ['abc', 'ab', 'abc'];
    //         u.ListDistinct(testArr1);
    //         expect(ansAsc).toEqual(testArr1);
    //     }
    // });
});
