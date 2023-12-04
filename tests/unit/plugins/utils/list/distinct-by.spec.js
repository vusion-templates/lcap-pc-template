import { utils as u } from '@/plugins/utils/index.js';

jest.mock('cloud-ui.vusion', () => ({ }));

describe('列表去重', () => {
    const obj1 = { name : "Zhang San", gender: "M", salary: '10000' };
    const obj2 = { name : "Zhang San", gender: "F", salary: '20000' };
    const obj3 = { name : "Zhang San", gender: "M", salary: '30000' };

    const objs = [obj3, obj2, obj1];

    test('ListDistinctBy', () => {
        expect(u.ListDistinctBy(objs, [i => i.name, i => i.gender])).toEqual([obj3, obj2]);
    });

    test('ASYNC ListDistinctByAsync', async () => {
        const res = await u.ListDistinctByAsync(objs, [i => i.name, i => i.gender]);
        expect(res).toEqual([obj3, obj2]);
    });

    test('Async 一致性', async () => {
        const res = await u.ListDistinctByAsync(objs, [i => i.name, i => i.gender]);
        expect(res).toEqual(u.ListDistinctBy(objs, [i => i.name, i => i.gender]));
    });
});
