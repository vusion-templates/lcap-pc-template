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

export default {
    components: { SFreesassLogin, SFreesassBanner },
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
                await auth.CheckExtendToken({ config: {
                    noErrorTip: true,
                } });
            } catch (error) {
                console.error('CheckExtendToken: ', error);
                this.$refs.freeSassLogin.open();
            }
        }
    },
};

</script>
