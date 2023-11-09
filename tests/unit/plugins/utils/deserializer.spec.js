import { utils as cUtils } from '@/plugins/utils/index.js';
jest.mock('cloud-ui.vusion', () => ({

}));

describe('反序列化函数', () => {
    test('fromString to Date、Time、DateTime 测试', () => {
        expect(cUtils.FromString('2023-09-21', 'Date')).toBe('2023-09-21');
        expect(cUtils.FromString('11:11:11', 'Time')).toBe('11:11:11');

        // 支持跨国应用，用户本地时区
        const dateStr = JSON.stringify(new Date('2023-09-21 11:11:11')).replace(/"/g, '');
        expect(cUtils.FromString('2023-09-21 11:11:11', 'DateTime')).toBe(dateStr);
    });

    test('fromString to Integer、Decimal 测试', () => {
        expect(cUtils.FromString('01', 'Long').__value.toString()).toBe('1');
        expect(cUtils.FromString('00.00', 'Decimal').__value.toString()).toBe('0');
    });
});
