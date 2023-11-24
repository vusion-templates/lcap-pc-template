import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

describe('ListDistinct', () => {
    test('兼容性测试，去重原生数字', () => {
        {
            const ansAsc = [-100, 0, 100];
            const testArr1 = [-100, 0, 100, 0, 0, 100, -100];
            u.ListDistinct(testArr1);
            expect(ansAsc).toEqual(testArr1);
        }
    });

    test('去重复杂对象', () => {
        const obj1 = { name: "Zhang San", gender: "M", age: 18 };
        const obj2 = { name: "Li Si", gender: "M", age: 20 };
        const obj3 = { name: "Wang Wu", gender: "F", age: 19 };

        // name 升序
        const ansAsc = [obj1, obj2, obj3];
        // TODO：目前只支持按 Reference 内存地址去重
        const testArr1 = [obj1, obj2, obj3, obj2];
        u.ListDistinct(testArr1);
        expect(ansAsc).toEqual(testArr1);
    });

    test('去重字符串', () => {
        {
            const ansAsc = ['abc', 'ab'];
            const testArr1 = ['abc', 'ab', 'abc'];
            u.ListDistinct(testArr1);
            expect(ansAsc).toEqual(testArr1);
        }
    });
});

describe('ListDistinctBy', () => {
    test('兼容性测试，去重原生数字', () => {
        {
            const ansAsc = [-100, 0, 100];
            const testArr1 = [-100, 0, 100, 0, 0, 100, -100];
            expect(ansAsc).toEqual(u.ListDistinctBy(testArr1, [(item) => item]));
        }
    });

    test('去重复杂对象', () => {
        const obj1 = { name: "Zhang San", gender: "M", age: 19 };
        const obj2 = { name: "Li Si", gender: "M", age: 20 };
        const obj3 = { name: "Wang Wu", gender: "F", age: 19 };

        {
            const ansAsc = [obj1, obj3];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListDistinctBy(testArr1, [(item) => item.gender]));
        }

        {
            const ansAsc = [obj1, obj2];
            const testArr1 = [obj1, obj2, obj3];
            expect(ansAsc).toEqual(u.ListDistinctBy(testArr1, [(item) => item.age]));
        }
    });
});
