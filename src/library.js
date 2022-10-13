import Vue from 'vue';
import 'cloud-ui.vusion/dist/index.css';
import * as CloudUI from 'cloud-ui.vusion/dist';
import { installOptions, installDirectives, installComponents } from '@vusion/utils';

installOptions(Vue);
installDirectives(Vue, CloudUI.directives);
installComponents(Vue, CloudUI);

Vue.mixin(CloudUI.MEmitter);
Vue.mixin(CloudUI.MPubSub);

const vusionPackages = require.context('../vusion_packages', true, /\.\/([\w-]+|@[\w-]+\/[\w-]+)\/dist-theme\/index\.js$/);
vusionPackages.keys().forEach((key) => {
    vusionPackages(key);
    installComponents(Vue, vusionPackages(key));
});
