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
            const { env, dnsAddr } = window.appInfo;
            if (env === 'dev') {
                return `dev.${dnsAddr}` === location.host;
            } else {
                return `${dnsAddr}` === location.host;
            }
        },
        isFreeSass() {
            return +window.appInfo?.tenantType === 1;
        },
    },
    async mounted() {
        if (this.isSharePage && this.isFreeSass) {
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
