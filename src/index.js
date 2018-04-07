#!/usr/bin/env node

const chalk = require('chalk').default;
const { ask } = require('./ask');
const { copyFiles } = require('./copyFiles');
const { install } = require('./install');
const { updatePackageJson } = require('./updatePackageJson');

console.log(
  chalk.greenBright('Lemoncode CLI')
);

const run = async () => {
  const config = await ask();
  try {
    copyFiles(config);
    await install(config);
    await updatePackageJson(config);
  } catch (error) {
    console.log(
      chalk.red(error)
    );
  }
}

run();
