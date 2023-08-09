<template>
    <u-toast ref="toast" v-show="!copySuccess" :class="$style.stoast">
        <div :class="$style.toastbox">
            {{ text }}
        </div>
    </u-toast>
</template>

<script>
import { UToast, UCopy } from 'cloud-ui.vusion';

export default {
    name: 's-toast',
    components: {
        UToast,
    },
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
        show(text, message, duration = 3000) {
            this.copySuccess = false;
            if (!this.$el) {
                this.$mount(document.createElement('div'));
            } else {
                this.$nextTick(() => {
                    this.text = text;
                    this.message = message;
                    this.$refs.toast.error(null, duration);
                });
            }
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
        margin-right: 18px;
    }
    .stoast [class^="u-toast_item__"] {
        padding: 0px 0px 0px 40px !important;
        max-width:999px!important
    }
</style>
