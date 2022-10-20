import { stringify } from 'qs';

export default function paramsSerializer(params) {
    if (typeof params === 'object') {
        Object.keys(params).forEach((key) => {
            const param = params[key];
            if (param === '' || param === undefined)
                delete params[key];
        });
    }

    return stringify(params, {
        arrayFormat: 'repeat',
        encoder(str, defaultEncoder, charset, type) {
            if (type === 'value' && str.includes && str.includes(','))
                return encodeURI(str);
            else
                return defaultEncoder(str, defaultEncoder, charset, type);
        },
    });
}
