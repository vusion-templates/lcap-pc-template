import { createService } from '@/global/features/service/create';
import api from './api';
import apiConfig from './api.config';
import merge from 'lodash/merge';
import cookie from '@/global/features/utils/cookie';

const service = createService(merge(api, apiConfig), {
    headers: {
        domainName: window.appInfo && window.appInfo.domainName,
        authorization: cookie.get('authorization'),
        username: cookie.get('username'),
    },
});

export default service;
