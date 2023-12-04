import metaData from './metaData.json';
import platformConfig from './platform.config.json';
import { routes } from './router/routes';
import './library';
import cloudAdminDesigner from './init';

window.ICESTARK = window.ICESTARK || {};
if (!window.ICESTARK.root) {
    cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
}

window.ICESTARK.library = __microAppName__;
let appVM;

export function mount({ container, customProps  }) {
    window.LcapMicro = window.LcapMicro || {};
    Object.assign(window.LcapMicro, __properties__);

    if(window.LcapMicro.noAuthUrl && !window.LcapMicro.noAuthFn)
        window.LcapMicro.noAuthFn = () => {
            location.href = window.LcapMicro.noAuthUrl;
        };

    if(window.LcapMicro.loginUrl && !window.LcapMicro.loginFn)
        window.LcapMicro.loginFn = () => {
            location.href = window.LcapMicro.loginUrl;
        };

    if(window.LcapMicro.notFoundUrl && !window.LcapMicro.notFoundFn)
        window.LcapMicro.notFoundFn = () => {
            location.href = window.LcapMicro.notFoundUrl;
        };
    
    window.LcapMicro.container = container; 
    window.LcapMicro.props = customProps;
    appVM = cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
}

export function unmount({ container }) {
    window.LcapMicro.container.innerHTML = null;
    appVM?.$destroy();
}
