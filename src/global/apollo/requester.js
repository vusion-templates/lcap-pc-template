import axios from 'axios';

const formatContentType = function (contentType, data) {
    const map = {
        'application/x-www-form-urlencoded'(data) {
            return JSON.stringify(data);
        },
    };
    return map[contentType] ? map[contentType](data) : data;
};

const requester = function (requestInfo) {
    const { url, config = {} } = requestInfo;
    const { path, method, body = {}, headers = {}, query = {} } = url;
    const baseURL = config.baseURL ? config.baseURL : '';
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    let data;
    const method2 = method.toUpperCase();
    if (Object.keys(body).length || ['PUT', 'POST', 'PATCH'].includes(method2)) {
        data = formatContentType(headers['Content-Type'], body);
    }
    const req = axios({
        params: query,
        baseURL,
        method: method2,
        url: path,
        data,
        headers,
        withCredentials: !baseURL,
        xsrfCookieName: 'csrfToken',
        xsrfHeaderName: 'x-csrf-token',
    });
    return req;
};

export default requester;
