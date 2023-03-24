import axios from 'axios';
import Service from 'request-pre';
import { stringify } from 'qs';

import cookie from '@/utils/cookie';
import addConfigs from './add.configs';
import { getFilenameFromContentDispositionHeader } from './tools';
import paramsSerializer from './paramsSerializer';
import { formatMicroFrontUrl } from '@/plugins/router/microFrontUrl';

const formatContentType = function (contentType, data) {
    const map = {
        'application/x-www-form-urlencoded'(data) {
            return stringify(data);
        },
    };
    return map[contentType] ? map[contentType](data) : data;
};

/**
 * 目前主要测试的是 get 请求
 * 图片，文件，和文件流形式的下载
 * https://raw.githubusercontent.com/vusion/cloud-ui/master/src/assets/images/1.jpg
 * 支持 query 参数
 */
function download(url) {
    const { path, method, body = {}, headers = {}, query = {}, timeout } = url;

    return axios({
        url: path,
        method,
        params: query,
        data: formatContentType(headers['Content-Type'], body),
        responseType: 'blob',
        timeout,
    }).then((res) => {
        // 包含 content-disposition， 从中解析名字，不包含 content-disposition 的获取请求地址的后缀
        let effectiveFileName = res.request.getAllResponseHeaders().includes('content-disposition') ? getFilenameFromContentDispositionHeader(res.request.getResponseHeader('content-disposition')) : res.request.responseURL.split('/').pop();
        effectiveFileName = decodeURIComponent(effectiveFileName);
        const { data, status, statusText } = res;
        // 如果没有size长度
        if (data && data.size === 0) {
            return Promise.resolve({
                data: {
                    code: status,
                    msg: statusText,
                },
            });
        }

        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', effectiveFileName); // any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
        return Promise.resolve({
            data: {
                code: status,
                msg: statusText,
            },
        });
    }).catch((err) =>
        // 基于 AxiosError 的错误类型 https://github.com/axios/axios/blob/b7e954eba3911874575ed241ec2ec38ff8af21bb/index.d.ts#L85
        Promise.resolve({
            data: {
                code: err.code,
                msg: err.response.statusText,
            },
        }));
}

const requester = function (requestInfo) {
    const { url, config = {} } = requestInfo;
    const { method, body = {}, headers = {}, query = {} } = url;
    const path = formatMicroFrontUrl(url.path);

    const baseURL = config.baseURL ? config.baseURL : '';
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    if (!headers.Authorization && cookie.get('authorization')) {
        headers.Authorization = cookie.get('authorization');
    }
    headers.DomainName = window.appInfo?.domainName;

    if (config.download) {
        return download(url);
    }
    let data;
    const method2 = method.toUpperCase();
    if (Array.isArray(body) || Object.keys(body).length || ['PUT', 'POST', 'PATCH', 'DELETE'].includes(method2)) {
        data = formatContentType(headers['Content-Type'], body);
    }
    const req = axios({
        params: query,
        paramsSerializer,
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

const service = new Service(requester);
addConfigs(service);

export const createService = function createService(apiSchemaList, serviceConfig, dynamicServices) {
    const fixServiceConfig = serviceConfig || {};
    fixServiceConfig.config = fixServiceConfig.config || {};
    Object.assign(fixServiceConfig.config, {
        httpCode: true,
        httpError: true,
        shortResponse: true,
    });
    serviceConfig = fixServiceConfig;

    return service.generator(apiSchemaList, dynamicServices, serviceConfig);
};

export const createLogicService = function createLogicService(apiSchemaList, serviceConfig, dynamicServices) {
    const fixServiceConfig = serviceConfig || {};
    fixServiceConfig.config = fixServiceConfig.config || {};
    Object.assign(fixServiceConfig.config, {
        httpCode: true,
        httpError: true,
        shortResponse: true,
        concept: 'Logic',
    });
    serviceConfig = fixServiceConfig;

    return service.generator(apiSchemaList, dynamicServices, serviceConfig);
};
