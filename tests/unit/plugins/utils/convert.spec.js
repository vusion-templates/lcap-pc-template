import { utils as codewaveUtils } from '@/plugins/utils/index.js';
import momentTZ from 'moment-timezone';

jest.mock('cloud-ui.vusion', () => ({

}));

describe('Convert 函数', () => {
    test('Convert 函数，string 到 string', () => {

    });
    //     test('Convert 函数，string 到 DateTime', () => {
    //         const str = '2019-09-09 11:00:00';

    //         expect(codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'DateTime' }))
    //             .toBe('2019-09-09T11:00:00+08:00');

    //         expect(codewaveUtils.ToString('nasl.core.DateTime',
    //                 codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'DateTime' })))
    //             .toBe('2019-09-09 11:00:00');
    //     });

    //     test('Convert 函数，string 到 Date', () => {
    //         const str = '2019-09-09 11:00:00';

    //         expect(codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'Date' }))
    //             .toBe('2019-09-09');

    //         expect(codewaveUtils.ToString('nasl.core.Date',
    //                 codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'Date' })))
    //             .toBe('2019-09-09');
    //     });

    //     test('Convert 函数，string 到 Time', () => {
    //         const str = '2019-09-09 11:00:00';

    //         expect(codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'Time' }))
    //             .toBe('11:00:00');

    //         expect(codewaveUtils.ToString('nasl.core.Time',
    //                 codewaveUtils.Convert(str, { typeKind: 'primitive', typeName: 'Time' })))
    //             .toBe('11:00:00');
    //     });
});
