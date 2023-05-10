<template>
    <div style="height:100%">
        <s-freesass-banner v-if="isFreeSass"></s-freesass-banner>
        <router-view></router-view>
        <s-freesass-login ref="freeSassLogin"></s-freesass-login>
    </div>
</template>

<script>
import SFreesassLogin from '@/components/s-freesass-login';
import SFreesassBanner from '@/components/s-freesass-banner';
import auth from '@/apis/auth';

const newDomain = location.host.split('.').includes('163');
const serviceMap = {
    // generateSfToken: 'http://sfsso.community1.lcap.qz.163yun.com/api/generateSfToken',
    checkSfToken: `${location.protocol}//sfsso.community1.lcap.qz.163yun.com/api/checkSfToken`,
    checkSfTokenNew: `${location.protocol}//sfsso-community1.app.codewave.163.com/api/checkSfToken`,
};
export default {
    components: { SFreesassLogin, SFreesassBanner },
    computed: {
        isSharePage() {
            let str = 'lcap.qz.163yun';
            if (newDomain) { str = 'app.codewave.163'; }
            const neteaseStrList = str.split('.');
            return neteaseStrList.some((it) => location.host.includes(it));
        },
        isFreeSass() {
            return +window.appInfo?.tenantType === 1 && +window.appInfo?.tenantLevel === 0;
        },
    },
    async mounted() {
        if (this.isSharePage && +window.appInfo?.tenantType === 1) {
            try {
                let url = serviceMap.checkSfToken;
                if (newDomain) { url = serviceMap.checkSfTokenNew; }
                // 校验接口
                const res = await fetch(url, {
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
};

</script>
