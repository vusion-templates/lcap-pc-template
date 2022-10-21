import { createLogicService } from '@/utils/create';

export default {
    install(Vue, options = {}) {
        const logicsMap = Object.assign({}, options.logicsMap);
        Vue.prototype.$logics = createLogicService(logicsMap);
    },
};
