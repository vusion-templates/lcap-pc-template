const path = require('path');
const fs = require('fs');
const mkdirSync = function (dir, ops) {
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir, Object.assign({
        recursive: true,
    }, ops));
}
};
function read(root, filter, files, prefix) {
    prefix = prefix || '';
    files = files || [];
    filter = filter || function (i) {
        return i;
    };
  
    const dir = path.join(root, prefix);
    if (!fs.existsSync(dir)) return files;
    if (fs.statSync(dir).isDirectory())
      fs.readdirSync(dir)
      .filter(function (name, index) {
        return filter(name, index, dir)
      })
      .forEach(function (name) {
        read(root, filter, files, path.join(prefix, name))
      })
    else
      files.push(prefix)
  
    return files
};
const copy = function (source, target, filter) {
    read(source, filter).forEach((file) => {
        const targetFile = path.join(target, file);
        mkdirSync(path.dirname(targetFile))
        fs.copyFileSync(path.join(source, file), targetFile);
    });
}
module.exports = {
  copy,
  read,
  mkdirSync,
};