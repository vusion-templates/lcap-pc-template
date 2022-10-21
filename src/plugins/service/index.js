import isPlainObject from 'lodash/isPlainObject';

import { createLogicService } from '@/utils/create';

export default {
    install(Vue, options = {}) {
        const services = Object.assign({}, options.servicesMap);
        const keys = Object.keys(services);
        if (Vue.prototype.$services) {
            keys.forEach((key) => {
                if (Vue.prototype.$services[key]) {
                    throw new Error('services repeat:' + key);
                }
                const service = services[key];
                if (isPlainObject(service)) {
                    services[key] = createLogicService(service);
                }
            });
        }
        if (keys.length) {
            Vue.prototype.$services = Object.assign({}, Vue.prototype.$services, services);
        }
    },
};
