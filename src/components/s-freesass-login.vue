<template>
    <u-modal disable-esc :visible.sync="visible" ok-button="" cancel-button="" @cancel="close">
        <template #title>
            <div style="font-style: normal;font-weight: 500;font-size: 16px;color: #333333;">登录/注册</div>
        </template>
        <template #body>
            <div :class="$style.title">轻舟低代码，人人都可开发专属应用</div>
            <u-iframe ref="iframe2" style="width:100%;height:350px;" src="https://id-test.163yun.com/sdk-login?cmsKey=SdkLoginPage&i18nEnable=true&locale=zh_CN&h=shufanqzlcap&t=shufanqzlcap"></u-iframe>
            <div :class="$style.content">
                <div style="width:14px;height:14px;margin-top:3px;">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0ZM6.28674 3.48829C6.28674 3.91693 6.63422 4.26442 7.06287 4.26442C7.49151 4.26442 7.839 3.91693 7.839 3.48829C7.839 3.05964 7.49151 2.71216 7.06287 2.71216C6.63422 2.71216 6.28674 3.05964 6.28674 3.48829ZM5.51148 10.6244C5.51148 10.8387 5.68522 11.0124 5.89954 11.0124H8.22793C8.44225 11.0124 8.61599 10.8387 8.61599 10.6244C8.61599 10.4101 8.44225 10.2363 8.22793 10.2363H7.65449V5.65902C7.65449 5.39876 7.48368 5.17839 7.24805 5.1039C7.20471 5.08718 7.15762 5.07801 7.10839 5.07801C7.09655 5.07729 7.08442 5.07693 7.07239 5.07693C7.06037 5.07693 7.04844 5.07729 7.03659 5.07801H6.20813C5.99381 5.07801 5.82006 5.25175 5.82006 5.46607C5.82006 5.6804 5.99381 5.85414 6.20813 5.85414H6.4903V10.2363H5.89954C5.68522 10.2363 5.51148 10.4101 5.51148 10.6244Z" fill="#337EFF" />
                        <path d="M6.28674 3.48853C6.28674 3.91718 6.63422 4.26466 7.06287 4.26466C7.49151 4.26466 7.839 3.91718 7.839 3.48853C7.839 3.05989 7.49151 2.7124 7.06287 2.7124C6.63422 2.7124 6.28674 3.05989 6.28674 3.48853ZM5.51147 10.6246C5.51147 10.8389 5.68522 11.0127 5.89954 11.0127H8.22793C8.44225 11.0127 8.61599 10.8389 8.61599 10.6246C8.61599 10.4103 8.44225 10.2366 8.22793 10.2366H7.65449V5.65927C7.65449 5.399 7.48368 5.17863 7.24805 5.10414C7.20471 5.08742 7.15762 5.07825 7.10839 5.07825C7.09655 5.07753 7.08442 5.07717 7.07239 5.07717C7.06037 5.07717 7.04843 5.07753 7.03659 5.07825H6.20813C5.99381 5.07825 5.82006 5.252 5.82006 5.46632C5.82006 5.68064 5.99381 5.85438 6.20813 5.85438H6.4903V10.2366H5.89954C5.68522 10.2366 5.51147 10.4103 5.51147 10.6246Z" fill="white" />
                    </svg>
                </div>
                <div>为防止不法分子发布违规应用，用户需先登录才可查看。如需无限制查看，开发者可将应用域名更换为自有域名。</div>
            </div>
        </template>
    </u-modal>
</template>

<script>
import auth from '@/apis/auth';
import cookie from '@/utils/cookie';

export default {
    name: 's-freesass-login',
    data() {
        return {
            visible: false,
        };
    },
    created() {
        window.addEventListener('message', this.dealMessage);
    },
    methods: {
        async dealMessage(msg) {
            if (msg?.data && typeof msg?.data === 'string' && JSON.parse(msg?.data)?.token) {
                const userId = JSON.parse(msg?.data)?.token.userId;
                cookie.set({ authorization_extend_token_key: userId }, 15);
                this.close();
                const res = await auth.GenerateExtendToken({});
                const token = res?.Data;
                if (token) {
                    cookie.set({ authorization_extend_token: token }, 15);
                }
            }
        },
        open() {
            this.visible = true;
        },
        close() {
            this.visible = false;
        },
    },
};

</script>

<style module>
     .title{
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
        text-align: center;
     }
     .content {
        padding:10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap:10px;
     }
</style>
