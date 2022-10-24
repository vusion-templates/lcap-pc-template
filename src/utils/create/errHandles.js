import Vue from 'vue';

import SToast from '@/components/s-toast.vue';

const Ctr = Vue.component('s-toast', SToast);
const instance = new Ctr();
const getErrMessage = (err) => err.msg || err.Message || '暂无错误信息';
const getErrStrack = (err) => err.StackTrace || '暂无错误信息';

export default {
    defaults({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误');
        }
    },
    500({ config }, err = {}) {
        if (!config.noErrorTip) {
            instance.show(getErrMessage(err), getErrStrack(err));
        }
    },
    400({ config }, err = {}) {
        if (!config.noErrorTip) {
            instance.show(getErrMessage(err), getErrStrack(err));
        }
    },
    403({ config }, err = {}) {
        if (err.Code === 'InvalidToken' && err.Message === 'Token is invalid') {
            if (!config.noErrorTip) {
                instance.show('登录失效', '请重新登录');
            }
            location.href = '/login';
        }
    },
    remoteError({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误，请联系管理员！');
        }
    },
    localError({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误，请联系管理员！');
        }
    },
};
