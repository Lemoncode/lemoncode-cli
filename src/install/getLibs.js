const { dependencies, devDependencies } = require('./constants');

module.exports = {
  getDependencies: (config) => {
    let libs = dependencies.base;
    if (config.useReact) {
      libs = [
        ...libs,
        ...dependencies.react
      ];
    }

    return libs;
  },

  getDevDependencies: (config) => {
    let libs = [
      ...devDependencies.base,
      ...devDependencies[`webpack${config.webpackVersion}`],
    ];

    if (config.useReact) {
      libs = [
        ...libs,
        ...devDependencies.react
      ];
    }

    if (config.useJest) {
      libs = [
        ...libs,
        ...devDependencies.jest
      ];
    }

    return libs;
  },
};
