const { getProcessBasePath } = require('../helpers');
const { copyCommonFiles } = require('./copyCommon');
const { copyWebpack3Files } = require('./copyWebpack3');

const src = __dirname;
const output = getProcessBasePath();

module.exports = {
  copyFiles: config => {
    copyCommonFiles(config, src, output);

    switch (config.webpackVersion) {
      case 3:
        return copyWebpack3Files(config, src, output);

      default:
        throw new Error('Not valid webpack version provided');
    }
  },
};
