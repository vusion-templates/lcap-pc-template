import { utils as cutils } from '@/plugins/utils/index.js';
jest.mock('cloud-ui.vusion', () => ({

}));

describe('Test List Contains', () => {
    test('测试非正常输入', () => {
        expect(cutils.Contains(undefined, 1)).toBe(false);
        expect(cutils.Contains(null, 1)).toBe(false);
        expect(cutils.Contains([], 1)).toBe(false);
        expect(cutils.Contains([undefined, null], 1)).toBe(false);
    });

    test('正常输入', () => {
        const list = [1, 4, null, -2, null, undefined];

        expect(cutils.Contains(list, 1)).toBe(true);
        expect(cutils.Contains(list, 4)).toBe(true);
        expect(cutils.Contains(list, -2)).toBe(true);
        expect(cutils.Contains(list, null)).toBe(true);
        expect(cutils.Contains(list, 3)).toBe(false);
        expect(cutils.Contains(list, undefined)).toBe(false);
    });
});
