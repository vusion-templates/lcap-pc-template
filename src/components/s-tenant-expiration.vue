<template>
    <div class="container">
        <img :src="require('/source/page/assets/tenant-expired.png')" class="errorImg">
        <div class="errorText">当前租户已过期，请联系平台工作人员</div>
        <div class="errorText">或拨打客服电话：0571-89926330</div>
    </div>
</template>

<script>
export default {
    name: 's-tenant-expiration',
    components: {
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.errorImg {
    width: auto;
    height: 40%;
}
.errorText {
    font-size: 20px;
    color: #999999;
    line-height: 30px;
    font-weight: normal;
    font-family: PingFangSC-Medium;
}
</style>
