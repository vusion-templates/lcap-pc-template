<template>
    <div>
        <s-freesass-banner v-if="isFreeSass"></s-freesass-banner>
        <router-view></router-view>
        <s-freesass-login ref="freeSassLogin"></s-freesass-login>
    </div>
</template>

<script>
import SFreesassLogin from '@/components/s-freesass-login';
import SFreesassBanner from '@/components/s-freesass-banner';
import auth from '@/apis/auth';
import lowauth from '@/apis/lowauth';
import Vue from 'vue';
//  console.log('SFreesassLogin: ', SFreesassLogin);
window.freeDebug = Vue.component('s-freesass-login', SFreesassLogin);
export default {
    components: { SFreesassLogin, SFreesassBanner },
    computed: {
        isSharePage() {
            const { env, dnsAddr } = window.appInfo;
            if (env === 'dev') {
                console.log('`dev${dnsAddr}`: ', `dev${dnsAddr}`);
                console.log('location.host: ', location.host);
                return `dev${dnsAddr}` === location.host;
            } else {
                return `${dnsAddr}` === location.host;
            }
        },
        isFreeSass() {
            return +window.appInfo?.tenantType === 1;
        },
    },
    watch: {},
    async mounted() {
        if (this.isSharePage && this.isFreeSass) {
            try {
                const low = window?.appInfo?.hasUserCenter || false;
                const apiRequest = low ? lowauth.CheckExtendToken : auth.CheckExtendToken;
                const res = await apiRequest({});
                console.log('CheckExtendToken: ', res);
                if (!res.Data.userId) {
                // this.$refs.freeSassLogin.open();
                }
            } catch (error) {
                // this.$refs.freeSassLogin.open();

            }
        }
    },
    methods: {

    },
};

</script>
