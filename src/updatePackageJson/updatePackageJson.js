const fs = require('fs');
const { getPackageJsonPath } = require('../helpers');
const { scripts } = require('./constants');

module.exports = {
  updatePackageJson: async () => {
    const path = getPackageJsonPath();
    const file = require(path);

    file.scripts = {
      ...file.scripts,
      ...scripts,
    };
    return await updatePackageJsonFile(file, path);
  },
};

const updatePackageJsonFile = (file, path) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(file), error =>
      Boolean(error) ? reject(error) : resolve()
    );
  });
