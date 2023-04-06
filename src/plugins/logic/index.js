import { createLogicService } from '@/utils/create';
import { pick } from 'lodash';

export default {
    install(Vue, options = {}) {
        const logicsMap = Object.assign({}, options.logicsMap);

        Object.keys(logicsMap)
            .filter((key) => /app\.dataSources\.[^.]+.entities.[^.]+.logics.(update|updateBy|createOrUpdate|batchUpdate)/.test(key))
            .forEach((key) => {
                logicsMap[key].config.preprocess = (info) => {
                    const body = info.url.body;
                    if (body.properties) {
                        if (body.entity)
                            body.entity = pick(body.entity, body.properties);
                        if (body.entities)
                            body.entities = body.entities.map((entity) => pick(entity, body.properties));

                        delete body.properties;
                    }
                    return info;
                };
            });

        Vue.prototype.$logics = createLogicService(logicsMap);
    },
};
