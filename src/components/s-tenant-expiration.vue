<template>
    <u-linear-layout layout="block" justify="center" alignment="center">
        <img src="/source/page/assets/tenant-expired.png" class="errorImg">
        <div class="errorText">当前租户已过期，请联系管理员</div>
    </u-linear-layout>
</template>

<script>
import { ULinearLayout } from 'cloud-ui.vusion';
export default {
    name: 's-tenant-expiration',
    components: {
        ULinearLayout,
    },
};
</script>

<style scoped>
    .errorImg {
        width: 50%;
        height: 50%;
    }
    .errorText {
        font-size: 20px;
        color: #999999;
        line-height: 30px;
        font-weight: normal;
        font-family: PingFangSC-Medium;
    }
</style>
