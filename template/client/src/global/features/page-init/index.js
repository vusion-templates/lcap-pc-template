import LoadStatus from '@/global/features/common/mixins/load';
import Modal from '@/global/features/common/mixins/modal/install';
import Vue from 'vue';
import './library';
Vue.mixin(LoadStatus);
Vue.use(Modal);
