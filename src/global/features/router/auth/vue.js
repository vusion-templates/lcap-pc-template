import $auth from './index';

export default {
    install(Vue, options = {}) {
        options.allowList = [].concat([], options.allowList);

        const router = options.router;
        const base = options.base.replace(/\/$/, '');
        /**
        * 是否有当前路由下的子权限
        * 该方法只能在 Vue 中调用
        * @param {*} subPath 子权限路径，如 /createButton/enabled
        */
        $auth.hasSub = function (subPath) {
            const currentPath = base + router.currentRoute.path;
            if (subPath[0] !== '/')
                subPath = '/' + subPath;
            return this.has(currentPath + subPath);
        };
        $auth.hasFullPath = function (path) {
            if (path[0] !== '/')
                path = '/' + path;
            return this.has(base + path);
        };
        /**
         * 账号与权限中心
         */
        Vue.prototype.$auth = $auth;

        // designer 和 环境直接放行认证和鉴权
        if (process.env.NODE_ENV === 'development' || process.env.VUE_APP_DESIGNER) {
            Vue.directive('auth', {
                bind() {
                    // noop
                },
            });
            return;
        }

        /**
         * - 组件权限项功能
         * - 自动隐藏路由组件功能
         * 实现该需求无非三种方案：
         *     - 源码修改 v-show 或 disabled 属性，比如 :disabled="!$auth.hasSub('createButton/enabled') || !canSubmit"，
         *       从而从根本上改变 render 函数，有一定风险+恶心
         *     - 在 updated 阶段植入一些东西，缺点就是每次 updated 都会走一遍
         *     - 修改原组件 disabled 属性等，不是很推荐。在外层包装组件也属于这种情况
         */
        /**
         * 权限指令
         * value 绑定权限项，如果不传则使用 ref 名
         * modifiers 的名字用于子权限行为，组件属性那里有问题，暂时没有实现
         */
        const vAuth = {
            handle(el, binding, vnode, oldVnode) {
                const data = {
                    value: binding.value || '',
                    actions: Object.keys(binding.modifiers),
                };

                // const authPath = `${base + router.currentRoute.path}/${data.value ? data.value : vnode.data.ref}`;
                const authPath = data.value;
                const visible = $auth.has(authPath);

                el && (el.style.display = visible ? '' : 'none');
            },
            bind(el, binding, vnode, oldVnode) {
                vAuth.handle(el, binding, vnode, oldVnode);
            },
            update(el, binding, vnode, oldVnode) {
                vAuth.handle(el, binding, vnode, oldVnode);
            },
        };
        Vue.directive('auth', vAuth);

        Vue.mixin({
            mounted() {
                // 目前只开放权限显隐
                this._updateVisibleByAuth();
            },
            updated() {
                this._updateVisibleByAuth();
            },
            methods: {
                _updateVisibleByAuth() {
                    if (!(options.autoHide && this.to))
                        return;
                    // 有 v-auth 了就不处理 to 的了。
                    if (this.$vnode.data.directives && this.$vnode.data.directives.some((directive) => directive.name === 'auth'))
                        return;
                    if (!$auth.isInit())
                        return;

                    let visible = true;
                    if (options.autoHide && this.to) {
                        let toPath;
                        if (typeof this.to === 'object')
                            toPath = this.to.path;
                        else if (typeof this.to === 'string')
                            toPath = this.to.split('?')[0];
                        // 去掉末尾的 / 导致的权限不匹配
                        const fullPath = (base + toPath).replace(/\/+$/, '');
                        visible = visible && $auth.has(fullPath);
                    }

                    this.$el && (this.$el.style.display = visible ? '' : 'none');
                },
            },
        });
    },
};

