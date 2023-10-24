import { utils as codewaveUtils } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({

}));

describe('日期时间计数函数', () => {
    test('GetDateCount，Date 类型，无时区信息，兼容性测试', () => {
        expect(codewaveUtils.GetDateCount('2023-09-21', 'day-month')).toBe(21);
        expect(codewaveUtils.GetDateCount('2023-09-21', 'day-week')).toBe(4);
    });

    test('GetDateCount，DateTime 类型，有时区信息', () => {
        const d1 = new Date('2023-09-21T01:01:56.000Z');
        expect(codewaveUtils.GetDateCount(d1, 'day-month', 'Asia/Shanghai')).toBe(21);
        expect(codewaveUtils.GetDateCount(d1, 'day-month', 'America/New_York')).toBe(20);
        expect(codewaveUtils.GetDateCount(d1, 'day-week', 'Asia/Shanghai')).toBe(4);
        expect(codewaveUtils.GetDateCount(d1, 'day-week', 'America/New_York')).toBe(3);
    });

    test('GetDateCount，DateTime 类型，有时区信息，字符串输入', () => {
        const d1 = '2023-09-21T01:01:56.000Z';
        expect(codewaveUtils.GetDateCount(d1, 'day-month', 'Asia/Shanghai')).toBe(21);
        expect(codewaveUtils.GetDateCount(d1, 'day-month', 'America/New_York')).toBe(20);
        expect(codewaveUtils.GetDateCount(d1, 'day-week', 'Asia/Shanghai')).toBe(4);
        expect(codewaveUtils.GetDateCount(d1, 'day-week', 'America/New_York')).toBe(3);
    });

    test('GetSpecificDaysOfWeek，Date 类型，无时区信息，兼容性测试', () => {
        expect(codewaveUtils.GetSpecificDaysOfWeek('2023-09-18', '2023-09-24', [1, 7, 8]))
            .toEqual(['2023-09-18', '2023-09-24']);
    });

    test('GetSpecificDaysOfWeek，DateTime 类型，有时区信息', () => {
        const d1 = new Date('2023-09-18T01:01:56.000Z');
        const d2 = new Date('2023-09-24T01:01:56.000Z');

        expect(codewaveUtils.GetSpecificDaysOfWeek(d1, d2, [1, 7, 8], 'Asia/Shanghai'))
            .toEqual(['2023-09-18 00:00:00', '2023-09-24 00:00:00']); // 上海时间是 18 号到 24 号

        expect(codewaveUtils.GetSpecificDaysOfWeek(d1, d2, [1, 7, 8], 'America/New_York'))
            .toEqual(['2023-09-17 00:00:00', '2023-09-18 00:00:00']); // 纽约时间是 17 号到 23 号
    });

    test('GetSpecificDaysOfWeek，DateTime 类型，有时区信息 2，字符串输入', () => {
        const d1 = '2023-09-18T01:01:56.000Z';
        const d2 = '2023-09-24T01:01:56.000Z';

        expect(codewaveUtils.GetSpecificDaysOfWeek(d1, d2, [1, 7, 8], 'Asia/Shanghai'))
            .toEqual(['2023-09-18 00:00:00', '2023-09-24 00:00:00']); // 上海时间是 18 号到 24 号

        expect(codewaveUtils.GetSpecificDaysOfWeek(d1, d2, [1, 7, 8], 'America/New_York'))
            .toEqual(['2023-09-17 00:00:00', '2023-09-18 00:00:00']); // 纽约时间是 17 号到 23 号
    });
});
