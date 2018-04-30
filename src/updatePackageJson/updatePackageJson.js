const fs = require('fs');
const { getProcessBasePath } = require('../helpers');
const { scripts, jest } = require('./constants');

module.exports = {
  updatePackageJson: async (config) => {
    const basePath = getProcessBasePath();
    const path = `${basePath}/package.json`;
    const file = require(path);

    file.scripts = {
      ...file.scripts,
      ...scripts,
    };

    if (config.useJest) {
      file.jest = {
        ...jest,
      };
    }
    return await updatePackageJsonFile(file, path);
  }
}

const updatePackageJsonFile = (file, path) => new Promise((resolve, reject) => {
  fs.writeFile(path, JSON.stringify(file), (error) => (
    Boolean(error) ?
      reject(error) :
      resolve()
  ));
});
