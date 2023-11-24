import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

describe('Test List Contains', () => {
    test('测试非正常输入', () => {
        expect(u.Contains(undefined, 1)).toBe(false);
        expect(u.Contains(null, 1)).toBe(false);
        expect(u.Contains([], 1)).toBe(false);
        expect(u.Contains([undefined, null], 1)).toBe(false);
    });

    test('正常输入', () => {
        const list = [1, 4, null, -2, null, undefined];

        expect(u.Contains(list, 1)).toBe(true);
        expect(u.Contains(list, 4)).toBe(true);
        expect(u.Contains(list, -2)).toBe(true);
        expect(u.Contains(list, 3)).toBe(false);
        expect(u.Contains(list, null)).toBe(true);
        expect(u.Contains(list, undefined)).toBe(true);
    });

    test('正常输入 字符串', () => {
        const list = ['1', '4', null, '-2', null, undefined];

        expect(u.Contains(list, '1')).toBe(true);
        expect(u.Contains(list, '4')).toBe(true);
        expect(u.Contains(list, '-2')).toBe(true);
        expect(u.Contains(list, '3')).toBe(false);
        expect(u.Contains(list, null)).toBe(true);
        expect(u.Contains(list, undefined)).toBe(true);
    });
});
