'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  httpProxy: {
    enable: true,
    package: '@eggjs/http-proxy',
  },
  logger: {
    enable: true,
    package: 'egg-logger',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
