<template>
    <div :class="$style.freesassroot">
        <u-iframe ref="iframe3" style="width:1px;height:1px;opacity: 0;" src="https://sfsso-community1.app.codewave.163.com/sso"></u-iframe>
    </div>
</template>

<script>

export default {
    name: 's-freesass-transfer',
    data() {
        return {
            visible: false,
        };
    },
    created() {
        window.addEventListener('message', this.dealMessage);
    },
    methods: {
        dealMessage(msg) {
            function getExpires(exdays = 1) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                return d.toGMTString();
            }
            const target = 'https://sfsso-community1.app.codewave.163.com';
            if (msg?.origin === target && msg?.data && typeof msg?.data === 'string' && JSON.parse(msg?.data)?.sf_token_http) {
                const token = JSON.parse(msg?.data)?.sf_token_http;
                const expires = JSON.parse(msg?.data)?.expires;
                if (token) {
                    document.cookie = `${token}; expires=${getExpires(expires)};`;
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
    .loginModal [class^=u-modal_close__] {
        display: none!important;
    }
</style>
