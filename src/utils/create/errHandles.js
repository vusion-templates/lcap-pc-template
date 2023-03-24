import Vue from 'vue';

import SToast from '@/components/s-toast.vue';

const Ctr = Vue.component('s-toast', SToast);
const instance = new Ctr();
const getErrMessage = (err) => err.msg || err.Message || '系统错误，请查看日志！';
const getErrStrack = (err) => err.StackTrace || '系统错误，请查看日志！';

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
    401({ config }, err = {}) {
        if (err.Code === 401 && err.Message === 'token.is.invalid') {
            if (!config.noErrorTip) {
                instance.show('登录失效', '请重新登录');
            }
            localStorage.setItem('beforeLogin', JSON.stringify(location));
            if (window.ICESTARK?.loginFn)
                window.ICESTARK.loginFn();
            else
                location.href = '/login';
        }
    },
    403({ config }, err = {}) {
        if (err.Code === 'InvalidToken' && err.Message === 'Token is invalid') {
            if (!config.noErrorTip) {
                instance.show('登录失效', '请重新登录');
            }
            localStorage.setItem('beforeLogin', JSON.stringify(location));
            if (window.ICESTARK?.loginFn)
                window.ICESTARK.loginFn();
            else
                location.href = '/login';
        }
    },
    remoteError({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误，请查看日志！');
        }
    },
    localError({ config }, err) {
        if (!config.noErrorTip) {
            instance.show('系统错误，请查看日志！');
        }
    },
};
