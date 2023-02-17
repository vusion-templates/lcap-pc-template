export function formatMicroFrontUrl(url) {
    if (window.ICESTARK?.proxyPrefix && url?.startsWith('/') && !url.startsWith('//'))
        url = `${window.ICESTARK.proxyPrefix}${url}`;

    return url;
}

export function formatMicroFrontRouterPath(path) {
    if (window.ICESTARK?.basename && path?.startsWith('/') && !path.startsWith('//'))
        path = `${window.ICESTARK.basename}${path}`;

    return path;
}
