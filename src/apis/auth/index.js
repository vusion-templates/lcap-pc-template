import merge from 'lodash/merge';

import { createService } from '@/utils/create';
import apiConfig from './api.config';
import api from './api';

const service = createService(merge(api, apiConfig));

export default service;
