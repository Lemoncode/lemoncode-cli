const path = require('path');
const { overwritingCopy } = require('../helpers');
const { log } = require('./helpers');
const { common } = require('./constants');

const copyCommonFiles = (config, src, output) => {
  const basePath = path.join(src, common.base);
  overwritingCopy(basePath, output);
  log(basePath, output);
};

module.exports = {
  copyCommonFiles,
};
