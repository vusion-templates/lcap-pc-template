<template>
    <u-toast ref="toast" v-show="!copySuccess" :class="$style.stoast">
        <div :class="$style.toastbox">
            {{ text }}
            <div :class="$style.copybox">
                <svg style="margin: 0 10px 0 10px;" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5213 1.02835V8.04572H9.94998V9.07407H10.5497C11.102 9.07407 11.5497 8.62636 11.5497 8.07407V1C11.5497 0.447716 11.102 0 10.5497 0H3.47561C2.92332 0 2.47561 0.447715 2.47561 1V1.59961H3.50396V1.02835H10.5213Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33337 3.33325C9.33337 2.78097 8.88566 2.33325 8.33337 2.33325H1.00004C0.447755 2.33325 4.1008e-05 2.78097 4.1008e-05 3.33325V10.6666C4.1008e-05 11.2189 0.447756 11.6666 1.00004 11.6666H8.33337C8.88566 11.6666 9.33337 11.2189 9.33337 10.6666V3.33325ZM8.23533 10.5685V3.43129H1.09808V10.5685H8.23533Z" fill="white" />
                </svg>
                <u-copy :value="message" feedback="none" @copy="copy">复制错误信息</u-copy>
            </div>
        </div>
    </u-toast>
</template>

<script>

export default {
    name: 's-toast',
    data() {
        return {
            copySuccess: false,
            text: '',
            message: '',
        };
    },
    destroyed() {
        document.body.removeChild(this.$el);
    },
    methods: {
        copy() {
            this.copySuccess = true;
            this.$toast.success('复制成功，可粘贴查看错误信息');
        },
        show(text, message, duration = 3000) {
            this.copySuccess = false;
            if (!this.$el) {
                this.$mount(document.createElement('div'));
            }
            this.$nextTick(() => {
                this.text = text;
                this.message = message;
                this.$refs.toast.error(null, duration);
            });
        },
    },
};

</script>

<style module>
    .stoast {
        display: block;
    }

    .toastbox {
        display: flex;
        height: 40px;
        line-height: 40px;
    }

    .copybox {
        cursor: pointer;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        height: 40px;
        line-height: 40px;
        padding: 0 5px 0;
        margin-left: 16px;
        padding-right: 16px;
        min-width: 140px;
    }

    .copybox:hover {
        background: #3d3d3e;
        border-radius: 4px;
    }

    .stoast [class^="u-toast_item__"] {
        padding: 0px 0px 0px 40px !important;
        max-width:999px!important
    }
</style>
