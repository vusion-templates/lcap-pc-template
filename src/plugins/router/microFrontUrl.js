export function formatMicroFrontUrl(url) {
    if (window.LcapMicro?.proxyPrefix && url?.startsWith('/') && !url.startsWith('//'))
        url = `${window.LcapMicro.proxyPrefix}${url}`;

    return url;
}

export function formatMicroFrontRouterPath(path) {
    if (window.LcapMicro?.routePrefix && path?.startsWith('/') && !path.startsWith('//'))
        path = `${window.LcapMicro.routePrefix}${path}`;

    return path;
}
