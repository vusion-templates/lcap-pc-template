import Vue from 'vue';
import * as Components from '@/global/components';
import filters from '@/global/features/common/filters';

import { installFilters, installComponents } from '@vusion/utils';

installFilters(Vue, filters);
installComponents(Vue, Components);

// 源码导出依赖vusion_packages，直接使用 dist-theme 版本
const vusionPackages = require.context('../../../../vusion_packages', true, /\.\/([\w-]+|@[\w-]+\/[\w-]+)\/dist-theme\/index\.js$/);
vusionPackages.keys().forEach((key) => {
    installComponents(Vue, vusionPackages(key));
});
