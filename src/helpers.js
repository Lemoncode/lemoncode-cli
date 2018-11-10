const { copySync } = require('fs-extra');

module.exports = {
  getProcessBasePath: () => process.cwd(),

  overwritingCopy: (srcPath, outputPath) => {
    copySync(srcPath, outputPath, {
      overwrite: true,
      recursive: true,
    });
  },
};
