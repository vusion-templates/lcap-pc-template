<template>
    <div style="height:100%">
        <s-freesass-banner v-if="isFreeSass"></s-freesass-banner>
        <router-view></router-view>
        <s-freesass-login @afterShufanLogin="afterShufanLogin" ref="freeSassLogin"></s-freesass-login>
        <s-freesass-transfer v-if="isFreeSass&&loginFinished" ref="freesassTransfer"></s-freesass-transfer>
    </div>
</template>

<script>
import SFreesassLogin from '@/components/s-freesass-login';
import SFreesassTransfer from '@/components/s-freesass-transfer';
import SFreesassBanner from '@/components/s-freesass-banner';
import auth from '@/apis/auth';

const serviceMap = {
    // generateSfToken: 'http://sfsso.community1.lcap.qz.163yun.com/api/generateSfToken',
    checkSfToken: 'http://sfsso.community1.lcap.qz.163yun.com/api/checkSfToken',
};
export default {
    components: { SFreesassLogin, SFreesassBanner, SFreesassTransfer },
    data() {
        return {
            loginFinished: false,
        };
    },
    computed: {
        isSharePage() {
            const neteaseStrList = 'lcap.qz.163yun'.split('.');
            return neteaseStrList.some((it) => location.host.includes(it));
        },
        isFreeSass() {
            return +window.appInfo?.tenantType === 1 && +window.appInfo?.tenantLevel === 0;
        },
    },
    async mounted() {
        if (this.isSharePage && +window.appInfo?.tenantType === 1) {
            try {
                // 校验接口
                const res = await fetch(serviceMap.checkSfToken, {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                });
                const data = await res.json();
                // data.Code  === 200
                if (data?.Data === true) {
                    // 制品有sf_token 什么都不做
                } else {
                    this.$refs.freeSassLogin.open();
                }
                // 删除此处 根据后端接口控制
                // await auth.CheckExtendToken({ config: {
                //     noErrorTip: true,
                // } });
            } catch (error) {
                console.error('CheckExtendToken: ', error);
                this.$refs.freeSassLogin.open();
            }
        }
    },
    methods: {
        afterShufanLogin() {
            this.loginFinished = true;
        },
    },
};

</script>
