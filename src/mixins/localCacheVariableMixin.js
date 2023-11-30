import storage from '@/utils/storage/localStorage';
import isEmpty from 'lodash/isEmpty';

const ACTION_LOCAL_CACHE_VARIABLE_TYPE = {
  GET: 'get',
  UPDATE: 'update',
  UNDEFINED: 'undefined',
};

// 定义一个名为 visibilityMixin 的全局混入对象
export const localCacheVariableMixin = {
  beforeMount() {
    this.actionLocalCacheVariable(ACTION_LOCAL_CACHE_VARIABLE_TYPE.GET);
  },
  mounted() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    this.actionLocalCacheVariable(ACTION_LOCAL_CACHE_VARIABLE_TYPE.UPDATE);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  methods: {
    handleVisibilityChange() {
      if (document.hidden && typeof this.actionLocalCacheVariable === 'function') {
        this.actionLocalCacheVariable(ACTION_LOCAL_CACHE_VARIABLE_TYPE.UPDATE);
      }
    },
    actionLocalCacheVariable(type = ACTION_LOCAL_CACHE_VARIABLE_TYPE.UNDEFINED) {
      const localCacheVariableSet = this.$localCacheVariableSet;
      const { frontendVariables } = this.$global;

      for (const localCacheVariableKey of localCacheVariableSet) {
        switch (type) {
          // 从 localCache 中获取数据
          case ACTION_LOCAL_CACHE_VARIABLE_TYPE.GET:
            {
              const localCacheValue = storage.get(localCacheVariableKey, true);
              // 若存在 localCacheValue 则同步到 frontendVariables
              if (localCacheValue) {
                frontendVariables[localCacheVariableKey] = localCacheValue;
              }
            }

            break;
          // 将 frontendVariables 中的数据同步到 localCache 触发时机 应用销毁前 & 应用切换到后台
          case ACTION_LOCAL_CACHE_VARIABLE_TYPE.UPDATE:
            {
              const currentValue = frontendVariables[localCacheVariableKey];

              // 只同步写入非空值 避免 local 过多冗余数据
              if (isEmpty(currentValue) && typeof currentValue !== 'boolean' && typeof currentValue !== 'number' && currentValue !== '') {
                storage.remove(localCacheVariableKey);
              } else {
                storage.set(localCacheVariableKey, currentValue, true);
              }
            }

            break;

          default:
            console.warn('actionLocalCacheVariable: type is undefined', type);
            break;
        }
      }
    },

  },
};
