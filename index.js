'use strict';

const path = require("path");

module.exports = function (content) {
  const fileName = path.basename(this.resourcePath);
  const filePathArray = [].concat(fileName);
  const filePath = JSON.stringify(filePathArray).slice(1, -1);

  return (
    "const path = require('path');" +
    "const filePath = path.resolve(process.resourcesPath + '/static/lib/', " +
    filePath +
    ");" +
    "try { global.process.dlopen(module, filePath); } " +
    "catch(exception) { throw new Error('Cannot open ' + filePath + ': ' + exception); };"
  );
};

module.exports.raw = true;
