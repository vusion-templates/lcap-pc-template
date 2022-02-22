import Vue from 'vue';
import * as Components from '@/global/components';
import filters from '@/global/features/common/filters';

import { installFilters, installComponents } from '@vusion/utils';

installFilters(Vue, filters);
installComponents(Vue, Components);
