import Vue from 'vue';
import { UToast } from 'cloud-ui.vusion';
import SToast from '@/global/components/common/s-toast.vue';
const Ctr = Vue.component('s-toast', SToast);
const instance = new Ctr();

export default {
    defaults({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误', err.msg || err.Message || '暂无错误信息');
        }
    },
    500({ config }, err = {}) {
        if (!config.noErrorTip) {
            instance.show('系统错误', err.msg || err.Message || '暂无错误信息');
        }
    },
    400({ config }, err = {}) {
        if (!config.noErrorTip) {
            instance.show('系统错误', err.msg || err.Message || '暂无错误信息');
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
