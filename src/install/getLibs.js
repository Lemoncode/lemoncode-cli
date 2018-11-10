const { dependencies, devDependencies } = require('./constants');

module.exports = {
  getDependencies: config => {
    let libs = dependencies.common;

    if (config.useReact) {
      libs = [...libs, ...dependencies.react];
    }

    return libs;
  },

  getDevDependencies: config => {
    let libs = [
      ...devDependencies.common,
      ...devDependencies.typescript.common,
      ...devDependencies[`webpack${config.webpackVersion}`],
      ...devDependencies.typescript.webpack,
    ];

    if (config.useReact) {
      libs = [
        ...libs,
        ...devDependencies.react,
        ...devDependencies.typescript.react,
      ];
    }

    if (config.useJest) {
      libs = [
        ...libs,
        ...devDependencies.jest,
        ...devDependencies.typescript.jest,
      ];
    }

    return libs;
  },
};
