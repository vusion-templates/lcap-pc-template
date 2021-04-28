const pages = require('../pages.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EventHooksWebpackPlugin = require('event-hooks-webpack-plugin');
const { CallbackTask } = require('event-hooks-webpack-plugin/lib/tasks');
module.exports = {
    chain(config, isDevelopment) {
        Object.keys(pages).forEach((pageName) => {
            config.plugins.delete('preload-' + pageName);
            config.plugins.delete('prefetch-' + pageName);
        });
        if (!pages.index) {
            const entryKeys = Object.keys(config.entryPoints.entries());
            const indexPage = Object.keys(pages).find((pageName) => {
                const page = pages[pageName];
                if (page.options && page.options.isIndex) {
                    return true;
                }
                return false;
            });
            if (indexPage) {
                config.plugin('html-index').use(EventHooksWebpackPlugin, [
                    {
                        emit: new CallbackTask((compilation, done) => {
                            const targetHtml = compilation.assets[`${indexPage}.html`];
                            compilation.assets['index.html'] = {
                                source() {
                                    return targetHtml.source();
                                },
                                size() {
                                    return targetHtml.size();
                                },
                            };
                            done();
                        }),
                    },
                ]);
            } else {
                if (isDevelopment) {
                    config.plugin('html-index').before(`html-${entryKeys[0]}`).use(HtmlWebpackPlugin, [{
                        title: '说明页',
                        filename: 'index.html',
                        templateContent: `<body>此为生成的 index 页面，可以创建相应的 index 页面或者修改 pages.json 中的 filename 进行覆盖。<br>
                        请注意：仅在 develop 模式下会生成此文件，线上环境合理配置后端路由
        目前可访问页面：<br>
                ${Object.values(pages).map((page) => `<a href="/${page.filename.replace('.html', '')}">${page.filename}</a>`).join('<br>')}</body>`,
                        chunks: [],
                    }]); // 顺序不能错，一定要在其他 html 之前
                }
            }
        }
        config.module.rule('ftl')
            .test(/\.ftl$/i)
            .use('underscore-template')
            .loader('underscore-template-loader')
            .options({
                attributes: ['img:src', 'link:style', 'script:src'],
                root: '~',
                engine: 'lodash',
                withImports: false,
                parseDynamicRoutes: false,
                parseMacros: false,
                interpolate: '<%=([\\s\\S]+?)%>',
            });
    },
};
