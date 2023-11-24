import isEqual from 'lodash/isEqual';
import fc from 'fast-check';

import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

describe('List sort functions', () => {
    test('List sort integers', () => {
        // 测试点 1，升序
        {
            const ansAsc = [-100,-100,0,0,0,100,100]
            const testArr1 = [-100, 0, 100, 0, 0, 100, -100]
            const testArr1SortedAsc = u.ListSort(testArr1, item => item, true)
            expect(JSON.stringify(ansAsc)).toEqual(JSON.stringify(testArr1))
            expect(testArr1SortedAsc).toBeUndefined
        }

        // 测试点 2，降序
        {
            const ansDes = [100,100,0,0,0,-100,-100]
            const testArr2 = [-100, 0, 100, 0, 0, 100, -100]
            const testArr2SortedDes = u.ListSort(testArr2, item => item, false)
            expect(JSON.stringify(ansDes)).toEqual(JSON.stringify(testArr2))
            expect(testArr2SortedDes).toBeUndefined
        }
    });

    test('List sort integers', () => {
    // 测试点 3，升序
        const obj1 = {name : "Zhang San", gender: "M"}
        const obj2 = {name : "Li Si", gender: "M"}
        const obj3 = {name : "Wang Wu", gender: "F"}

        // name 升序
        const ansAsc = [obj2, obj3, obj1]
        const testArr1 = [obj1, obj2, obj3]
        u.ListSort(testArr1, item => item.name, true)
        expect(JSON.stringify(ansAsc)).toEqual(JSON.stringify(testArr1))
    });
});

describe('ListSort property-based check', () => {
    it('List sort 幂等性', () => {
        fc.assert(
            fc.property(fc.array(fc.integer()), (arr) => {
                const arrCopy = JSON.parse(JSON.stringify(arr));
                return isEqual(u.ListSort(arr), u.ListSort(u.ListSort(arrCopy)));
            }),
        );
    });

    it('ListSort 升序最小值等于 0 号元素', () => {
        fc.assert(
            fc.property(fc.array(fc.integer(), { minLength: 1 }), (arr) => {
                u.ListSort(arr, item => item, true);
                return u.ListMin(arr) === arr[0];
            }),
        );
    });

    it('ListSort 降序最大值等于 0 号元素', () => {
      fc.assert(
          fc.property(fc.array(fc.integer(), { minLength: 1 }), (arr) => {
              u.ListSort(arr, item => item, false);
              return u.ListMax(arr) === arr[0];
          }),
      );
  });
});
