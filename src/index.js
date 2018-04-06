#!/usr/bin/env node

const chalk = require('chalk').default;
const { ncp } = require('ncp');
const { getProcessBasePath } = require('./helpers');

const srcBasePath = __dirname;
const outputBasePath = getProcessBasePath();

console.log(
  chalk.bgBlue('   Lemoncode CLI   ')
);

