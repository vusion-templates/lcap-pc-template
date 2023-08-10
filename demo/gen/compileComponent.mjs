import * as postcss from 'postcss';

export function compileComponent(options) {
    options.template = options.template && replaceTemplate(options.template, options.hash);
    options.style = options.style && replaceCSS(options.style, options.hash);
    return options;
}

export function replaceCSS(content, hash) {
    const root = postcss.parse(content);
    root.walkRules((rule) => {
        rule.selector = rule.selector.replace(/\.[-_a-zA-Z0-9]+/g, (m) => m + '__' + hash);
    });
    return root.toResult().css;
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
