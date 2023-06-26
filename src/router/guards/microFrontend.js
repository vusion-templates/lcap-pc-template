import { getBasePath } from '@/utils/encodeUrl';
// `${getBasePath()}/login`
// `${getBasePath()}/noAuth`
// `${getBasePath()}/notFound`

export const microFrontend = (to, from, next) => {
    if (to.path === `${getBasePath()}/login` && window.LcapMicro?.loginFn) {
        window.LcapMicro.loginFn();
        return;
    }

    if (to.path === `${getBasePath()}/noAuth` && window.LcapMicro?.noAuthFn) {
        window.LcapMicro.noAuthFn();
        return;
    }

    if (to.path === `${getBasePath()}/notFound` && window.LcapMicro?.notFoundFn) {
        window.LcapMicro.notFoundFn();
        return;
    }

    next();
};
