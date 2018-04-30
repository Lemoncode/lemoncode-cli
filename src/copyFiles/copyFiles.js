const chalk = require('chalk').default;
const path = require('path');
const { copySync } = require('fs-extra');
const { getProcessBasePath } = require('../helpers');
const { webpack3 } = require('./constants');

const srcBasePath = __dirname;
const outputBasePath = getProcessBasePath();

module.exports = {
  copyFiles: (config) => {
    switch (config.webpackVersion) {
      case 3:
        return copyWebpack3Files(config);

      default:
        throw new Error('Not valid webpack version provided');
    }
  }
}

const copyWebpack3Files = (config) => {
  const basePath = path.join(srcBasePath, webpack3.base);
  overwritingCopy(basePath, outputBasePath);
  log(basePath, outputBasePath);

  if (config.useJest) {
    const jestPath = path.join(srcBasePath, webpack3.jest);
    overwritingCopy(jestPath, outputBasePath);
    log(jestPath, outputBasePath);
  }

  if (config.useReact) {
    const reactPath = path.join(srcBasePath, webpack3.react);
    overwritingCopy(reactPath, outputBasePath);
    log(reactPath, outputBasePath);
  }
};

const overwritingCopy = (srcPath, outputPath) => {
  copySync(srcPath, outputPath, {
    overwrite: true,
    recursive: true,
  });
};

const log = (srcPath, outputPath) => {
  console.log(
    chalk.greenBright(`Copied files from ${srcPath} to ${outputPath}`)
  );
};
