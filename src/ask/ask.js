const inquirer = require('inquirer');
const { questions } = require('./questions');

module.exports = {
  ask: async () => await inquirer.prompt(questions),
}
