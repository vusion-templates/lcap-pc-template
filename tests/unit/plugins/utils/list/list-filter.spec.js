import { utils as u } from '@/plugins/utils/index.js';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

window.$utils = u;
window.NaslDecimal = NaslDecimal;
window.NaslLong = NaslLong;

jest.mock('cloud-ui.vusion', () => ({

}));

describe('ListFilter', () => {

    test('兼容性测试，原生数字', () => {
        {
            const ansAsc = [100, 100];
            const testArr1 = [-100, 0, 100, 0, 0, 100, -100];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item > 50));
        }
    });

    test('数值包装类', () => {
        {
            const ansAsc = [new NaslLong('100'), new NaslLong('100')];
            const testArr1 = [new NaslLong(-100), new NaslLong('0'), new NaslLong('100'), new NaslLong('0'),
                new NaslLong('0'), new NaslLong('100'), new NaslLong('-100')];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item > 50));
        }

        {
            const ansAsc = [new NaslDecimal('100'), new NaslDecimal('100.00')];
            const testArr1 = [new NaslDecimal('-100.0'), new NaslDecimal('0.0'), new NaslDecimal('100'), new NaslDecimal('0.00'),
                new NaslDecimal('0.0'), new NaslDecimal('100.00'), new NaslDecimal('-100.0')];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item > 50));
        }
    });

    test('数值包装类 2', () => {
        const obj1 = { name: "Zhang San", gender: "M", age: new NaslLong('19') };
        const obj2 = { name: "Li Si", gender: "M", age: new NaslLong('20') };
        const obj3 = { name: "Wang Wu", gender: "F", age: new NaslLong('19') };

        {
            const ansAsc = [obj1, obj2];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.gender === 'M'));
        }

        {
            const ansAsc = [obj2];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.age > 19));
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.age > new NaslLong('19')));
        }
    });
});
