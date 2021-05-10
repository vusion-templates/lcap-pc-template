import { UToast } from 'cloud-ui.vusion';
export default {
    defaults({ config }, err) {
        if (!config.noErrorTip) {
            UToast.show(err.msg || '系统错误，请联系管理员！');
        }
    },
    500({ config }, err = {}) {
        if (!config.noErrorTip) {
            UToast.show(err.msg || '系统错误，请联系管理员！');
        }
    },
    400({ config }, err = {}) {
        if (!config.noErrorTip) {
            UToast.show(err.msg || '系统错误，请联系管理员！');
        }
    },
    remoteError({ config }, err) {
        if (!config.noErrorTip) {
            UToast.show('系统错误，请联系管理员！');
        }
    },
    localError({ config }, err) {
        if (!config.noErrorTip) {
            UToast.show('系统错误，请联系管理员！');
        }
    },
};
