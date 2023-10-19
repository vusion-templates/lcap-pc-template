import './public-path';
import metaData from './metaData.json';
import platformConfig from './platform.config.json';
import { routes } from './router/routes';
import './library';
import cloudAdminDesigner from './init';

if (!window.__POWERED_BY_QIANKUN__) {
    cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
}
let appVM;

export async function bootstrap() {
    return Promise.resolve();
}
export async function mount(props) {
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
    
    const { container } = props;
    window.LcapMicro.container = container.querySelector('#app'); 
    // window.LcapMicro.appendTo = container.querySelector('#app');  // 如果开启了样式隔离，需要设置 appendTo, 弹窗等组件会挂在 container 上。
    window.LcapMicro.props = props;
    appVM = cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
    return Promise.resolve();
}
export async function unmount() {
    window.LcapMicro.container.innerHTML = null;
    appVM?.$destroy();
    return Promise.resolve();
}

