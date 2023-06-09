import { filterAuthResources } from '@/router/guards/auth';
import { getFatherPath } from '@/utils/route';

describe('filterAuthResources', () => {
    test('should return an empty array if input is not an array or is empty', () => {
        expect(filterAuthResources(null)).toEqual([]);
        expect(filterAuthResources(undefined)).toEqual([]);
        expect(filterAuthResources([])).toEqual([]);
    });

    test('all have father path in the list', () => {
        const resources = [
            { resourceValue: '/a' },
            { resourceValue: '/a/b' },
            { resourceValue: '/a/b/c' },
            { resourceValue: '/d' },
        ];

        const filtered = filterAuthResources(resources);

        expect(filtered).toEqual(resources);
    });

    test('demo1: do not have a father path in the list', () => {
        const resources = [
            { resourceValue: '/a' },
            { resourceValue: '/a/b/c' },
        ];

        const filtered = filterAuthResources(resources);

        expect(filtered).toEqual([{ resourceValue: '/a' }]);
    });

    test('demo2: do not have a father path in the list', () => {
        const resources = [{ resourceValue: '/a/b' }];

        const filtered = filterAuthResources(resources);

        expect(filtered).toHaveLength(0);
    });

    test('demo3: do not have a father path in the list', () => {
        const resources = [
            { resourceValue: '/a/b/c' },
            { resourceValue: '/a/b' },
        ];

        const filtered = filterAuthResources(resources);

        expect(filtered).toHaveLength(0);
    });
});

describe('getFatherPath', () => {
    test('should return correct father path for given path string', () => {
        // 测试多层路径
        expect(getFatherPath('/foo/bar/test')).toBe('/foo/bar');

        // 测试一级目录
        expect(getFatherPath('/test')).toBe('/');

        // 测试根目录
        expect(getFatherPath('/')).toBe('/');

        // 测试不合法输入（没有斜杠）
        expect(getFatherPath('test')).toBe('');
    });
});
