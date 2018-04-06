const { ncp } = require('ncp');
const { getProcessBasePath } = require('./helpers');

const srcBasePath = __dirname;
const outputBasePath = getProcessBasePath();

module.exports = {
  copyFiles = async (config) => {
    await ncp(path.join(srcBasePath, 'filesToCopy'), outputBasePath);
  }
}
