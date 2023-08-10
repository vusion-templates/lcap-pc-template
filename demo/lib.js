var LazyLoad = (function (doc) {
    var env,
        head,
        pending = {},
        pollCount = 0,
        queue = {
            css: [],
            js: []
        },
        styleSheets = doc.styleSheets;

    function createNode(name, attrs) {
        var node = doc.createElement(name),
            attr;
        for (attr in attrs) {
            if (attrs.hasOwnProperty(attr)) {
                node.setAttribute(attr, attrs[attr]);
            }
        }
        return node;
    }

    function finish(type) {
        var p = pending[type],
            callback,
            urls;
        if (p) {
            callback = p.callback;
            urls = p.urls;
            urls.shift();
            pollCount = 0;
            if (!urls.length) {
                callback && callback.call(p.context, p.obj);
                pending[type] = null;
                queue[type].length && load(type);
            }
        }
    }

    function getEnv() {
        var ua = navigator.userAgent;
        env = {
            async: doc.createElement('script').async === true
        };
        (env.webkit = /AppleWebKit\//.test(ua)) || (env.ie = /MSIE|Trident/.test(ua)) || (env.opera = /Opera/.test(ua)) || (env.gecko = /Gecko\//.test(ua)) || (env.unknown = true);
    }

    function load(type, urls, callback, obj, context) {
        var _finish = function () {
            finish(type);
        },
            isCSS = type === 'css',
            nodes = [],
            i,
            len,
            node,
            p,
            pendingUrls,
            url;
        env || getEnv();
        if (urls) {
            urls = typeof urls === 'string' ? [urls] : urls.concat();
            if (isCSS || env.async || env.gecko || env.opera) {
                queue[type].push({
                    urls: urls,
                    callback: callback,
                    obj: obj,
                    context: context
                });
            } else {
                for (i = 0, len = urls.length; i < len; ++i) {
                    queue[type].push({
                        urls: [urls[i]],
                        callback: i === len - 1 ? callback : null,
                        obj: obj,
                        context: context
                    });
                }
            }
        }
        if (pending[type] || !(p = pending[type] = queue[type].shift())) {
            return;
        }
        head || (head = doc.head || doc.getElementsByTagName('head')[0]);
        pendingUrls = p.urls.concat();
        for (i = 0, len = pendingUrls.length; i < len; ++i) {
            url = pendingUrls[i];
            if (isCSS) {
                node = env.gecko
                    ? createNode('style')
                    : createNode('link', {
                        href: url,
                        rel: 'stylesheet'
                    });
            } else {
                node = createNode('script', {
                    src: url
                });
                node.async = false;
            }
            node.className = 'lazyload';
            node.setAttribute('charset', 'utf-8');
            if (env.ie && !isCSS && 'onreadystatechange' in node && !('draggable' in node)) {
                node.onreadystatechange = function () {
                    if (/loaded|complete/.test(node.readyState)) {
                        node.onreadystatechange = null;
                        _finish();
                    }
                };
            } else if (isCSS && (env.gecko || env.webkit)) {
                if (env.webkit) {
                    p.urls[i] = node.href;
                    pollWebKit();
                } else {
                    node.innerHTML = '@import "' + url + '";';
                    pollGecko(node);
                }
            } else {
                node.onload = node.onerror = _finish;
            }
            nodes.push(node);
        }
        for (i = 0, len = nodes.length; i < len; ++i) {
            head.appendChild(nodes[i]);
        }
    }

    function pollGecko(node) {
        var hasRules;
        try {
            hasRules = !!node.sheet.cssRules;
        } catch (ex) {
            pollCount += 1;
            if (pollCount < 200) {
                setTimeout(function () {
                    pollGecko(node);
                }, 50);
            } else {
                hasRules && finish('css');
            }
            return;
        }
        finish('css');
    }

    function pollWebKit() {
        var css = pending.css,
            i;
        if (css) {
            i = styleSheets.length;
            while (--i >= 0) {
                if (styleSheets[i].href === css.urls[0]) {
                    finish('css');
                    break;
                }
            }
            pollCount += 1;
            if (css) {
                if (pollCount < 200) {
                    setTimeout(pollWebKit, 50);
                } else {
                    finish('css');
                }
            }
        }
    }
    function preload(url) {
        var asAttr = '';
        if (/\.js$/.test(url)) {
            asAttr = 'script';
        } else if (/\.css$/.test(url)) {
            asAttr = 'style';
        }
        var node = createNode('link', {
            href: url,
            as: asAttr,
            rel: 'preload'
        });
        head.appendChild(node);
    }
    return {
        css: function (urls, callback, obj, context) {
            load('css', urls, callback, obj, context);
        },
        js: function (urls, callback, obj, context) {
            load('js', urls, callback, obj, context);
        },
        preload: function (urls) {
            if (Object.prototype.toString.call(urls) === '[object Array]') {
                for (var i = 0; i < urls.length; i++) {
                    urls[i] && preload(urls[i]);
                }
            } else {
                urls && preload(urls);
            }
        }
    };
})(window.document);

var getPageName = function () {
    var pathname = location.pathname;
    pathname = pathname.split('/');
    window.pageName = pathname[1];
};
getPageName();

var traverse = function (node, func, parent, index) {
    func(node, parent, index);
    Object.values(node).forEach((value) => {
        if (Array.isArray(value)) {
            value.forEach((child, index) => child && traverse(child, func, node, index));
        } else if (typeof value === 'object') value && traverse(value, func, node, index);
    });
};
var parseScript = function (source) {
    if (!source) return;
    var content = source.trim().replace(/export default |module\.exports +=/, 'return ');
    try {
        /* eslint-disable no-eval */
        return eval(`(function(){ ${content} })()`);
    } catch (e) {
        console.error(e);
        return {};
    }
};
var parseComponent = function (options) {
    if (!options) return;
    var componentOptions = options.script ? parseScript(options.script) : {};
    Object.assign(componentOptions, {
        template: options.template
    });
    console.log(componentOptions);
    window.Vue.config.errorHandler = (err) => {
        console.log(err);
    };
    return window.Vue.extend(componentOptions);
};

var compileComponent = function (rootRoute) {
    traverse(rootRoute, function (node, parent, index) {
        node.component = parseComponent(node.component);
    });
};
var noLogin = function () {
    window.location.href = '/login';
};
var kebab2Camel = function (name) {
    return name.replace(/(?:^|-)([a-zA-Z0-9])/g, (m, $1) => $1.toUpperCase());
};

Object.assign(window, {
    LazyLoad, kebab2Camel,
});