import { mount } from '@vue/test-utils';
import YourComponent from '@/App.vue'; // 这里替换为你的组件实际路径
import storage from '@/utils/storage/localStorage';

jest.mock('@/utils/storage/localStorage', () => ({
    get: jest.fn(),
    set: jest.fn(),
    remove: jest.fn(),
}));

const runtimeSearchHistory = ['test'];

describe('Local Cache Variable Mixin', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(YourComponent, {
            mocks: {
                $localCacheVariableSet: new Set([
                    'searchHistory',
                ]),
                $global: {
                    frontendVariables: {
                        a: '',
                        b: 0,
                        c: {},
                        d: true,
                        searchHistory: [],
                    },
                },
            },
            stubs: {
                RouterView: true,
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        wrapper.destroy();
    });

    it('应用挂载读取', () => {
        expect(storage.get).toHaveBeenCalledWith('searchHistory', true);
        wrapper.vm.$global.frontendVariables.searchHistory = ['test'];
    });
});
