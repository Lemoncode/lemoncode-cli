const path = require('path');
const { overwritingCopy } = require('../helpers');
const { log } = require('./helpers');
const { webpack3 } = require('./constants');

const copyWebpack3Files = (config, src, output) => {
  const basePath = path.join(src, webpack3.base);
  overwritingCopy(basePath, output);
  log(basePath, output);

  if (config.useJest) {
    const jestPath = path.join(src, webpack3.jest);
    overwritingCopy(jestPath, output);
    log(jestPath, output);
  }

  if (config.useReact) {
    const reactPath = path.join(src, webpack3.react);
    overwritingCopy(reactPath, output);
    log(reactPath, output);
  }
};

module.exports = {
  copyWebpack3Files,
};
