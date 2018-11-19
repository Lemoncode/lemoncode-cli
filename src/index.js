#!/usr/bin/env node

const chalk = require('chalk').default;
const fs = require('fs');
const { getPackageJsonPath } = require('./helpers');
const { ask } = require('./ask');
const { copyFiles } = require('./copyFiles');
const { install } = require('./install');
const { updatePackageJson } = require('./updatePackageJson');

console.log(chalk.greenBright('Lemoncode CLI'));

const existPackageJson = () => {
  const path = getPackageJsonPath();
  return fs.existsSync(path);
};

const run = async () => {
  const config = await ask();
  try {
    copyFiles(config);
    await install(config);
    await updatePackageJson();
  } catch (error) {
    console.log(chalk.red(error));
  }
};

existPackageJson()
  ? run()
  : console.log(chalk.red('Must exist package.json file'));
