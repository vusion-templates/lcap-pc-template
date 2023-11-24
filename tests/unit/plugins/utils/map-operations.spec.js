import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

describe('Map 测试', () => {
    test('MapGet MapPut', () => {
        {
            const testMap = { };
            u.MapPut(testMap, 1.0, '123');
            u.MapPut(testMap, 1.00, '456');
            expect(u.Length(testMap)).toBe(1);
            expect(u.MapGet(testMap, 1)).toBe('456');
        }
    });
});
