import { utils as cutils } from '@/plugins/utils/index.js';
import { NaslDecimal, NaslLong } from '@/plugins/dataTypes/packingType';

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
        expect(cutils.Contains(list, undefined)).toBe(true);
        expect(cutils.Contains(list, 3)).toBe(false);
    });

    test('正常输入 2', () => {
        const list = [new NaslLong('1'), new NaslLong('4'), null, new NaslLong('-2'), null, undefined];

        expect(cutils.Contains(list, new NaslLong('1'))).toBe(true);
        expect(cutils.Contains(list, new NaslLong('4'))).toBe(true);
        expect(cutils.Contains(list, new NaslLong('-2'))).toBe(true);
        expect(cutils.Contains(list, null)).toBe(true);
        expect(cutils.Contains(list, new NaslLong('3'))).toBe(false);
        expect(cutils.Contains(list, 3)).toBe(false);
    });

    test('正常输入 字符串', () => {
        const list = ['1', '4', null, '-2', null, undefined];

        expect(cutils.Contains(list, '1')).toBe(true);
        expect(cutils.Contains(list, '4')).toBe(true);
        expect(cutils.Contains(list, '-2')).toBe(true);
        expect(cutils.Contains(list, null)).toBe(true);
        expect(cutils.Contains(list, '3')).toBe(false);
    });
});
