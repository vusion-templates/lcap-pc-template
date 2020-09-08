/* eslint valid-jsdoc: "off" */

'use strict';
const fs = require('fs');
const path = require('path');
const authHtmlNames = require('./auth.json');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
    },
    nunjucks: {
      // dir: 'path/to/template/dir',  // default to `{app_root}/app/view`
      cache: true, // local env is false
    },
    siteFile: {
      '/favicon.ico': fs.readFileSync(path.join(__dirname, '../app/view/favicon.ico')),
    },
    customLoader: {
      utils: {
        // 相对于 app.config.baseDir
        directory: 'app/utils',
        // 如果是 ctx 则使用 loadToContext
        inject: 'app',
        // 是否加载框架和插件的目录
        loadunit: false,
        // 还可以定义其他 LoaderOptions
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589536024870_4828';

  // add your middleware config here
  config.middleware = [ 'login', 'gateway' ];
  let hasLogin = false;

  const blockList = (() => {
    const protectedHtmlNames = [ 'login', 'noAuth', '404', '403', '500' ];
    const htmlPath = [];
    const files = fs.readdirSync(path.join(__dirname, '../app/view'));
    hasLogin = !!files.find(i => i === 'login.html');
    if (authHtmlNames.includes('index')) {
      htmlPath.push('/');
    }
    authHtmlNames.filter(authHtmlName => !protectedHtmlNames.includes(authHtmlName)).forEach(authHtmlName => {
      htmlPath.push('/' + authHtmlName);
      htmlPath.push('/' + authHtmlName + '/(.*)');
    });
    return htmlPath;
  })();
  // add your user config here
  const DomainName = require('../package.json').name.replace(/-server$/, '');
  const platformConfig = require('./platform.config.json');
  const userConfig = {
    // myAppName: 'egg',
    login: {
      login: hasLogin ? '/login' : undefined,
      blockList,
      noPermission: '/noAuth',
      domainName: DomainName,
    },
    gateway: {
      DomainName,
      TENANT: platformConfig.tenant,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
