/**
 * 中划线格式 -转-> 驼峰格式
 * @param name 原名称
 * @return 转换后的名称
 */
const kebab2Camel = (name) => name.replace(/(?:^|-)([a-zA-Z0-9])/g, (m, $1) => $1.toUpperCase());

/**
 * 驼峰格式 -转-> 中划线格式
 * @param name 原名称
 * @return 转换后的名称
 */
const Camel2kebab = (name) => name.replace(/([A-Z]|[0-9]+)/g, (m, $1, offset) => (offset ? '-' : '') + $1.toLowerCase());

export default {
    kebab2Camel,
    Camel2kebab,
};
