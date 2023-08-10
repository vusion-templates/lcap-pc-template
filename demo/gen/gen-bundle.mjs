import { fileURLToPath } from 'url';
import nasl from '@lcap/nasl-core';
import * as postcss from 'postcss';
import fs from 'fs-extra';
import path from 'path';
import JSON5 from 'json5';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search, replace) {
        if (typeof search === 'string') {
            return this.split(search).join(replace);
        } else if (search instanceof RegExp) {
            const re = new RegExp(search, 'g');
            return this.replace(re, replace);
        } else {
            throw new TypeError('search argument must be either string or regular expression');
        }
    };
}

function compileComponent(options) {
    options.template = options.template && replaceTemplate(options.template, options.hash);
    options.style = options.style && replaceCSS(options.style, options.hash);
    return options;
}

export function replaceTemplate(content, hash) {
    return content.replace(/:class="(.*?)"/g, (m, $1) => {
        const className = $1;
        if (/^\[.*\]$/g.test(className)) {
            const result = /^\[(.*)\]$/g.exec(className);
            const contents = result[1].split(',').filter((item) => item).map((item) => item.trim());
            return `class="${contents.map((item) => getClassName(item) + '__' + hash).join(' ')}"`;
        } else {
            return `class="${getClassName(className) + '__' + hash}"`;
        }
    });
}

export function getClassName(styleStr) {
    if (/^\$style\[['"](.*)['"]\]$/g.test(styleStr)) {
        const classNameVarName = /^\$style\[['"](.*)['"]\]$/g.exec(styleStr);
        if (classNameVarName)
            return classNameVarName[1];
    } else if (/^\$style./g.test(styleStr)) {
        const classNameVarName = styleStr.split('.')[1];
        if (classNameVarName)
            return classNameVarName;
    }
    return undefined;
}

export function replaceCSS(content, hash) {
    const root = postcss.parse(content);
    root.walkRules((rule) => {
        rule.selector = rule.selector.replace(/\.[-_a-zA-Z0-9]+/g, (m) => m + '__' + hash);
    });
    return root.toResult().css;
}

async function genBundle() {
    const demoPath = path.join(__dirname, './demo.json');
    const appJson = await fs.readJSON(demoPath);
    const app = new nasl.App(appJson);
    const outputs = genFrontendBundleFiles(app);
    outputs.forEach(({ frontendName, content }) => {
        const bundlePath = path.join(__dirname, `../bundle/${frontendName}.js`);
        fs.writeFile(bundlePath, content);
    });
}

function genFrontendBundleFiles(app, config) {
    let outputs = [];
    outputs = outputs.concat(...app.frontends.map((frontend) => genBundleFiles(app, frontend, config)));
    return outputs;
}

function genBundleFiles(app, frontend, config) {
    const fnNuimsDomain = config?.envNuimsDomain?.[config?.env] || config?.nuimsDomain;
    const fnLowcodeDomain = config?.envLcpDomain?.[config?.env]?.lcpDomain || config?.lowcodeDomain;
    const modules = [];
    const views = [];
    app.dependencies && modules.push(...app.dependencies);
    app.interfaceDependencies && modules.push(...app.interfaceDependencies);
    frontend.views && views.push(...frontend.views);
    modules.forEach((module) => {
        module.views && views.push(...module.views);
    });
    const componentMap = {};
    nasl.utils.traverse((current) => {
        if (current.node.toVueOptions)
            componentMap[current.node.id] = current.node.toVueOptions();
    }, {
        node: {
            children: views,
        },
    });



    /**
     * vue.config?.js page options
     */
    const routes = [];
    // 开启了权限的页面
    const authResourceViews = [];
    const baseResourcePaths = [];
    const rootViewData = [];
    let defaultRoute = '';

    // 遍历页面
    const traverseViews = (view, isParentViewAuth) => {
        const parentNode = view.parentNode || {};
        const isRootView = parentNode.concept !== 'View';
        const viewName = view.name;
        // 页面是否需要权限，如果父页面需要权限，子页面也一定需要
        const isViewAuth = isParentViewAuth || view.auth;

        // 路由地址
        let routePath = viewName;
        if (isRootView) {
            rootViewData.push({ name: viewName, title: view.title || viewName, isIndex: view.isIndex });
            routePath = `${frontend.prefixPath}/${viewName}`;
            if (!isViewAuth) {
                if (viewName === 'notFound') {
                    defaultRoute = routePath;
                }
                if (view.isIndex) {
                    if (!defaultRoute) {
                        defaultRoute = routePath;
                    }
                }
            }
        }

        const route = {
            path: routePath,
            component: compileComponent(componentMap[view.id]),
            children: [],
        };
        const viewChildren = view.children;
        if (Array.isArray(viewChildren) && viewChildren.length) {
            for (let i = 0; i < viewChildren.length; i++) {
                const subView = viewChildren[i];
                const { route: subViewRoute } = traverseViews(subView, isViewAuth);
                route.children.push(subViewRoute);
                if (subView.isIndex) {
                    route.children.push({
                        path: '',
                        redirect: `'${subView.name}'`,
                    });
                }
            }
        }
        const viewPath = view.path;
        if (isViewAuth) {
            authResourceViews.push(view);
        }
        if (!isViewAuth) {
            baseResourcePaths.push(viewPath);
        }
        return {
            route,
            isViewAuth,
        };
    };

    // 页面
    views.forEach((view) => {
        const { route } = traverseViews(view);
        routes.push(route);
        if (view.isIndex) {
            routes.push({
                path: frontend.prefixPath ? frontend.prefixPath : '/',
                redirect: `'${frontend.prefixPath}/${view.name}'`,
            });
        }
    });
    if (frontend.prefixPath) {
        routes.push({
            path: '/',
            redirect: `'${frontend.prefixPath}'`,
        });
    }
    const authResourcePathMap = {};
    // 默认跳转子页面开启权限的情况，需要把父页面也都加入权限校验列表
    if (Array.isArray(authResourceViews)) {
        authResourceViews.forEach((authResourceView) => {
            if (authResourceView) {
                authResourcePathMap[authResourceView.path] = true;
                let viewNode = authResourceView;
                while (viewNode.concept === 'View' && viewNode.isIndex) {
                    const parentViewNode = viewNode.parentNode;
                    if (parentViewNode.concept === 'View') {
                        authResourcePathMap[parentViewNode.path] = true;
                    } else { // viewNode是根页面
                        if (frontend.prefixPath) {
                            authResourcePathMap[frontend.prefixPath] = true;
                        }
                        authResourcePathMap['/'] = true;
                    }
                    viewNode = parentViewNode;
                }
            }
        });
    }
    const authResourcePaths = Object.keys(authResourcePathMap);
    function routeToString(route) {
        let content = `{
            path: '${route.path}',\n`;
        if (route?.component?.script) {
            const template = route.component.template;
            content += `component: (function(){
                var componentOptions = ${route.component.script ? '(function(){\n' + route.component.script.trim().replace(/export default |module\.exports +=/, 'return ') + '\n})()' : '{}'};
                Object.assign(componentOptions, {
                    template: \`${template.replace(/[`$]/g, (m) => '\\' + m)}\`,
                });
                return componentOptions;
            })(),\n`;
        }
        if (route?.children?.length) {
            content += `children: [
                ${route.children.map(routeToString).join(',\n')}
            ],\n`;
        }
        if (route?.redirect) {
            content += `redirect: ${route?.redirect},\n`;
        }
        content += '}';
        return content;
    }

    let routesStr = '[';
    routes.forEach((route) => {
        routesStr += `${routeToString(route)},\n`;
    });
    if (defaultRoute) {
        routesStr += `{
            path: '*',
            redirect: '${defaultRoute}',
        }\n`;
    }
    routesStr += ']';

    const platformConfig = JSON5.stringify({
        appConfig: {
            project: app.name,
            domainName: app.name,
            nuimsDomain: fnNuimsDomain,
            envNuimsDomain: config?.envNuimsDomain,
            tenantType: config?.tenantType,
            tenantLevel: config?.tenantLevel,
            extendedConfig: config?.extendedConfig,
            envConfig: {
                lowcodeDomain: fnLowcodeDomain,
            },
            tenant: config?.tenant,
            documentTitle: frontend.documentTitle,
            rootViewData,
            basePath: frontend.prefixPath,
            frontendName: frontend.name,
            // 加上统一前缀
            sysPrefixPath: app.sysPrefixPath,
        },
        dnsAddr: app.dnsAddr,
        devDnsAddr: config?.devDnsAddr,
        tenant: config?.tenant,
        env: config?.env,
        hasUserCenter: app.hasUserCenter,
        hasAuth: app.hasAuth,
        authResourcePaths,
        baseResourcePaths,
        miniEnable: config?.miniEnable,
    }, null, 4);

    const metaData = nasl.genMetaData(app, frontend);
    const metaDataStr = JSON5.stringify(metaData);

    const assetsInfo = app.genAllAssetsInfo(config?.STATIC_URL, frontend.type);
    const customNames = JSON5.stringify(assetsInfo.custom.names);
    let content = ``;

    const themeCSS = frontend.genThemeCSS();
    if (themeCSS) {
        content += `{
                            const el = document.createElement('style');
                            el.id = 'theme';
                            el.innerHTML = \`${themeCSS}\`;
                            document.head.appendChild(el);
                        }
        `;
    }

    if (frontend.documentIcon) {
        content += `{
            const link = document.createElement('link');
            link.rel = 'shortcut icon';
            link.href = \`${frontend.documentIcon}\`;
            document.head.appendChild(link);
        }`;
    }

    content += `

    import initModule from '../../src/init.js';

    var customNames = ${customNames};
    for(var i=0;i<customNames.length;i++){
        var name = window.kebab2Camel(customNames[i]);
        if(window[name]){
            window.CloudUI.install(window.Vue, window[name]);
        }
    }`;

    content += `
        var platformConfig = ${platformConfig};
        var metaData = ${metaDataStr};
        var routes = ${routesStr};

        window.createLcapApp = () => {
            const appVM = initModule.init(platformConfig.appConfig, platformConfig, routes, metaData);

            try {
                var push = appVM.$router.history.push;
                appVM.$router.history.push = function (a, b) {
                    push.apply(this, [a, b, console.warn]);
                };
            } catch (e) { console.error(e) }

            return window.appVM = appVM;
        };

        setTimeout(() => {
            window.createLcapApp();
        }, 2000)
    `;


    return {
        frontendName: frontend.name,
        content,
    };
}


genBundle();

