const { copySync } = require('fs-extra');

const getProcessBasePath = () => process.cwd();

const overwritingCopy = (srcPath, outputPath) => {
  copySync(srcPath, outputPath, {
    overwrite: true,
    recursive: true,
  });
};

const getPackageJsonPath = () => {
  const basePath = getProcessBasePath();
  return `${basePath}/package.json`;
};

module.exports = {
  getProcessBasePath,
  overwritingCopy,
  getPackageJsonPath,
};
