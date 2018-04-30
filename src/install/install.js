const chalk = require('chalk').default;
const npm = require('npm');
const { getDependencies, getDevDependencies } = require('./getLibs');

module.exports = {
  install: async (config) => {
    await installDependencies(config);
    await installDevDependencies(config);
  },
}

const installDependencies = async (config) => {
  console.log(
    chalk.greenBright(`Installing dependencies...`)
  );
  const libs = getDependencies(config);
  const isDev = false;

  return await install(libs, isDev);
};

const installDevDependencies = async (config) => {
  console.log(
    chalk.greenBright(`Installing dev dependencies...`)
  );
  const libs = getDevDependencies(config);
  const isDev = true;

  return await install(libs, isDev);
};

const install = (libs, isDev) => {
  return new Promise((resolve, reject) => {
    npm.load(() => {
      npm.config.set('save-dev', isDev);
    });

    npm.load(npm.config, () => {
      npm.commands.install(libs,
        (error) => (
          Boolean(error) ?
            reject(error) :
            resolve()
        ));
    });
  });
};
