<template>
    <u-toast ref="toast" v-show="!copySuccess" :class="$style.stoast">
        <div :class="$style.toastbox">
            {{ text }}
            <div :class="$style.copybox">
                <img style="margin: 0 10px 0 10px;"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgBzZHhCYAgEIUvcYBWcIM2kSaoDaoJqg1apU1qgtqgmsDegZKBEv7rgwce5+P0HZHFGFObbypBDydUZhHQGyEl4WpwKLxJmt5c0OAKCU1QaxshemjxDcyMqXvoNr/brwUl8i8Df36TCQbFwTiDRhqxWHPocCmyoSNvcQF4B6srbqaoRAOAGK/HAAAAAElFTkSuQmCC"
                    alt="">
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
    install(Vue, id) {
        const Ctor = Vue.component(id);
        if (!Ctor)
            return;
        const toast = (Vue.prototype.$toast = this.toast = new Ctor());
        const METHODS = [
            'show',
        ];
        METHODS.forEach((method) => (this[method] = toast[method].bind(toast)));
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
    }

    .copybox:hover {
        background: #3d3d3e;
    }

    .stoast [class^="u-toast_item__"] {
        padding: 0px 0px 0px 40px !important;
    }

</style>
