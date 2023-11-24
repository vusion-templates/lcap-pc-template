import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

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
            const ansAsc = [100, 100];
            const testArr1 = [-100, 0, 100, 0, 0, 100, -100];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item > 50));
        }

        {
            const ansAsc = [100, 100.00];
            const testArr1 = [-100.0, 0.0, 100, 0.00, 0.0, 100.00, -100.0];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item > 50));
        }
    });

    test('数值包装类 2', () => {
        const obj1 = { name: "Zhang San", gender: "M", age: 19 };
        const obj2 = { name: "Li Si", gender: "M", age: 20 };
        const obj3 = { name: "Wang Wu", gender: "F", age: 19 };

        {
            const ansAsc = [obj1, obj2];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.gender === 'M'));
        }

        {
            const ansAsc = [obj2];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.age > 19));
            expect(ansAsc).toEqual(u.ListFilter(testArr1, (item) => item.age > 19));
        }
    });
});
