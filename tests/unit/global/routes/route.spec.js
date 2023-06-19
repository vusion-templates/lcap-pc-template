import { filterAuthResources } from '@/router/guards/auth';

describe('filterAuthResources', () => {
    window.appInfo = { basePath: '/' };

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

    test('demo4: do not have a father path in the list', () => {
        const resources = [
            { resourceValue: '/a/b/c' },
            { resourceValue: '/a/b' },
            { resourceValue: '/a' },
        ];

        const filtered = filterAuthResources(resources);

        expect(filtered).toEqual(resources);
    });
});
