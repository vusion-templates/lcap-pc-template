<template>
    <u-navbar>
        <template #left><slot name="left"></slot></template>
        <template #default>
            <template v-for="(group, index) in config">
                <u-navbar-dropdown v-if="group.children" :title="group.title" :key="group.title">
                    <u-navbar-menu style="min-width: 150%">
                        <template v-for="(item, subIndex) in group.children">
                            <u-navbar-menu-divider v-if="item === '|'" :key="subIndex"></u-navbar-menu-divider>
                            <u-navbar-menu-item v-else :active-rule="item.activeRule" :key="item.title" :disabled="item.disabled" :to="item.to" :href="item.href" :target="item.href ? '_blank' : '_self'">
                                {{ item.title }}
                            </u-navbar-menu-item>
                        </template>
                    </u-navbar-menu>
                </u-navbar-dropdown>
                <u-navbar-divider v-else-if="group === '|'" :key="index"></u-navbar-divider>
                <u-navbar-item v-else :key="group.title" :disabled="group.disabled" :active-rule="group.activeRule" :to="group.to" :href="group.href" :target="group.href ? '_blank' : '_self'">{{ group.title }}</u-navbar-item>
            </template>
        </template>
        <template #right><slot name="right"></slot></template>
    </u-navbar>
</template>
<script>
export default {
    props: {
        config: Array,
    },
};
</script>
