import { createService } from '@/global/features/service/create';

export default {
    install(Vue, options = {}) {
        const logicsMap = Object.assign({}, options.logicsMap);
        Vue.prototype.$logics = createService(logicsMap);
    },
};
