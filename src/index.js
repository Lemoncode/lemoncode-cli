#!/usr/bin/env node

const chalk = require('chalk').default;
const { ask } = require('./ask');

console.log(
  chalk.bgBlue('   Lemoncode CLI   ')
);

const run = async () => {
  await ask();
}

run();
