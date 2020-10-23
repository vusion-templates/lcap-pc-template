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
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
