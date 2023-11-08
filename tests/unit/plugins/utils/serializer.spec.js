import { utils as codewaveUtils } from '@/plugins/utils/index.js';
import momentTZ from 'moment-timezone';

jest.mock('cloud-ui.vusion', () => ({

}));

describe('序列化函数', () => {
    test('JSON 序列化兼容性测试，无时区', () => {
        const cur = new Date('2023-09-21T09:01:56.000Z');
        // 零时区的现有展示方式
        expect(codewaveUtils.JsonSerialize(cur, 'UTC')).toBe('"2023-09-21T09:01:56.000Z"');
        // 未来，想用 "+00:00" 展示零时区
        expect(codewaveUtils.JsonSerialize(cur, 'Etc/GMT')).toBe('"2023-09-21T09:01:56.000+00:00"');
    });

    test('JSON 序列化兼容性测试，无时区 2，字符串输入', () => {
        const cur = '2023-09-21T09:01:56Z';
        // 零时区的现有展示方式
        expect(codewaveUtils.JsonSerialize(cur, 'UTC')).toBe('"2023-09-21T09:01:56.000Z"');
        // 未来，想用 "+00:00" 展示零时区
        expect(codewaveUtils.JsonSerialize(cur, 'Etc/GMT')).toBe('"2023-09-21T09:01:56.000+00:00"');
    });

    test('JSON 序列化测试，有时区', () => {
        {
            const summerTime1 = new Date('2016-03-13T07:00:01.000Z');
            expect(codewaveUtils.JsonSerialize(summerTime1, 'America/New_York'))
                .toBe('"2016-03-13T03:00:01.000-04:00"');
            expect(codewaveUtils.JsonSerialize(summerTime1, 'Asia/Shanghai'))
                .toBe('"2016-03-13T15:00:01.000+08:00"');
        }

        {
            const noSummerTime1 = new Date('2016-03-13T06:59:59.000Z');
            expect(codewaveUtils.JsonSerialize(noSummerTime1, 'America/New_York'))
                .toBe('"2016-03-13T01:59:59.000-05:00"');
            expect(codewaveUtils.JsonSerialize(noSummerTime1, 'Asia/Shanghai'))
                .toBe('"2016-03-13T14:59:59.000+08:00"');
        }
    });

    test('JSON 序列化测试，有时区 2，字符串输入', () => {
        {
            const summerTime1 = '2016-03-13T07:00:01.000Z';
            expect(codewaveUtils.JsonSerialize(summerTime1, 'America/New_York'))
                .toBe('"2016-03-13T03:00:01.000-04:00"');
            expect(codewaveUtils.JsonSerialize(summerTime1, 'Asia/Shanghai'))
                .toBe('"2016-03-13T15:00:01.000+08:00"');
        }

        {
            const noSummerTime1 = '2016-03-13T06:59:59Z';
            expect(codewaveUtils.JsonSerialize(noSummerTime1, 'America/New_York'))
                .toBe('"2016-03-13T01:59:59.000-05:00"');
            expect(codewaveUtils.JsonSerialize(noSummerTime1, 'Asia/Shanghai'))
                .toBe('"2016-03-13T14:59:59.000+08:00"');
        }
    });

    test('ToString 兼容性测试', () => {
        const curTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const cur = new Date('2023-09-21T17:01:56+08:00');
        expect(codewaveUtils.ToString('nasl.core.DateTime', cur))
            .toBe(momentTZ.tz('2023-09-21T17:01:56+08:00', curTZ).format('YYYY-MM-DD HH:mm:ss'));
    });

    test('ToString 兼容性测试 2，字符串输入', () => {
        const curTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const cur = '2023-09-21T17:01:56+08:00';
        expect(codewaveUtils.ToString('nasl.core.DateTime', cur))
            .toBe(momentTZ.tz('2023-09-21T17:01:56+08:00', curTZ).format('YYYY-MM-DD HH:mm:ss'));
    });

    test('ToString 时区格式化测试', () => {
        {
            const summerTime1 = new Date('2016-03-13T07:00:01Z');
            expect(codewaveUtils.ToString('nasl.core.DateTime', summerTime1, 'America/New_York'))
                .toBe('2016-03-13 03:00:01');
            expect(codewaveUtils.ToString('nasl.core.DateTime', summerTime1, 'Asia/Shanghai'))
                .toBe('2016-03-13 15:00:01');
        }

        {
            const noSummerTime1 = new Date('2016-03-13T06:59:59Z');
            expect(codewaveUtils.ToString('nasl.core.DateTime', noSummerTime1, 'America/New_York'))
                .toBe('2016-03-13 01:59:59');
            expect(codewaveUtils.ToString('nasl.core.DateTime', noSummerTime1, 'Asia/Shanghai'))
                .toBe('2016-03-13 14:59:59');
        }

        {
            expect(codewaveUtils.ToString('nasl.core.Time', '01:59:59'))
                .toBe('01:59:59');
            expect(codewaveUtils.ToString('nasl.core.Time', '14:59:59'))
                .toBe('14:59:59');
        }

        {
            expect(codewaveUtils.ToString('nasl.core.Time', '2016-03-13 01:59:59'))
                .toBe('01:59:59');
            expect(codewaveUtils.ToString('nasl.core.Time', '2016-03-13 14:59:59'))
                .toBe('14:59:59');
        }
    });

    test('ToString 时区格式化测试 2，字符串输入', () => {
        {
            const summerTime1 = '2016-03-13T07:00:01Z';
            expect(codewaveUtils.ToString('nasl.core.DateTime', summerTime1, 'America/New_York'))
                .toBe('2016-03-13 03:00:01');
            expect(codewaveUtils.ToString('nasl.core.DateTime', summerTime1, 'Asia/Shanghai'))
                .toBe('2016-03-13 15:00:01');
        }

        {
            const noSummerTime1 = '2016-03-13T06:59:59Z';
            expect(codewaveUtils.ToString('nasl.core.DateTime', noSummerTime1, 'America/New_York'))
                .toBe('2016-03-13 01:59:59');
            expect(codewaveUtils.ToString('nasl.core.DateTime', noSummerTime1, 'Asia/Shanghai'))
                .toBe('2016-03-13 14:59:59');
        }
    });
});
