import Vue from 'vue';
import * as Components from '@/global/components';
import filters from '@/global/features/common/filters';

import { installFilters, installComponents } from '@vusion/utils';

installFilters(Vue, filters);
installComponents(Vue, Components);

const vusionPackages = require.context('../../../../vusion_packages', true, /\.\/([\w-]+|@[\w-]+\/[\w-]+)\/index\.js$/);
console.log(vusionPackages.keys())
vusionPackages.keys().forEach((key) => {
    console.log(key);
    installComponents(Vue, vusionPackages(key));
});
