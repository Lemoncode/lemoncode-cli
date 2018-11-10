const chalk = require('chalk').default;

const log = (src, output) => {
  console.log(chalk.greenBright(`Copied files from ${src} to ${output}`));
};

module.exports = { log };
