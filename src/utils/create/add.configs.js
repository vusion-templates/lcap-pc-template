import errHandles from './errHandles';

const isPromise = function (func) {
    return func && typeof func.then === 'function';
};
function httpCode(response, params, requestInfo) {
    const { config } = requestInfo;
    const serviceType = config?.serviceType;
    if (serviceType && serviceType === 'external') {
        return response;
    }
    const data = response.data; // cloneDeep(response.data, (value) => value === null ? undefined : value);
    const code = data.code || data.Code;
    if ((code === undefined) || (code === 'Success') || (code + '').startsWith('2')) {
        return response;
    }
    return Promise.reject({
        code,
        msg: data.msg || data.Message,
    });
}
function shortResponse(response, params, requestInfo) {
    return response.data;
}
const httpError = {
    reject(err, params, requestInfo) {
        const { url, config = {} } = requestInfo;
        const { method, body = {}, headers = {} } = url;
        // 处理code
        if (err === 'expired request') {
            throw err;
        }
        let handle;
        if (!err.response) {
            handle = errHandles.remoteError;
        } else {
            handle = errHandles[err.response.status];
            if (!handle)
                handle = errHandles.defaults;
        }
        const handleOut = handle({
            config, baseURL: (config.baseURL || ''), url, method, body, headers,
        }, err.response.data);

        if (isPromise(handleOut))
            return handleOut;

        throw err;
    },
};
export default function (service) {
    if (process.env.NODE_ENV === 'development') {
        service.preConfig.set('baseURL', (requestInfo, baseURL) => {
            if (!baseURL.startsWith('http')) {
                throw new Error('set baseURL only support cross domain');
            }
        });
    }

    service.postConfig.set('httpCode', httpCode);
    service.postConfig.set('httpError', httpError);
    service.postConfig.set('shortResponse', shortResponse);
}
