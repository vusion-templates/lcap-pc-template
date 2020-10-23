'use strict';
const fs = require('fs');
module.exports = {
  router(app) {
    const files = [];
    app.config.view.root.forEach(template => {
      files.push(...fs.readdirSync(template));
    });
    return files;
  },
};
