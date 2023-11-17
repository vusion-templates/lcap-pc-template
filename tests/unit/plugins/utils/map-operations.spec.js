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
});
