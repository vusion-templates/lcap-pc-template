import { createService } from '@/global/features/service/create';
import api from './api';
import apiConfig from './api.config';
import merge from 'lodash/merge';

const service = createService(merge(api, apiConfig));

export default service;
