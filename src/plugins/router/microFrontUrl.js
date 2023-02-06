export function formatMicroFrontUrl(url) {
    if (window.ICESTARK?.basename && url?.startsWith('/') && !url.startsWith('//'))
        url = `${window.ICESTARK.basename}${url}`;

    return url;
}
