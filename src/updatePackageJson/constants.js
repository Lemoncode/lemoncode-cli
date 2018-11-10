module.exports = {
  scripts: {
    "start": "npm run start:dev",
    "start:dev": "env-cmd development webpack-dev-server --config ./config/webpack/app/dev.js",
    "start:prod": "env-cmd production webpack-dev-server --config ./config/webpack/app/prod.js",
    "build": "env-cmd production webpack -p --config ./config/webpack/app/prod.js",
    "build:dev": "env-cmd development webpack --config ./config/webpack/app/dev.js",
    "test": "jest -c ./config/test/jest.json --verbose",
    "test:watch": "jest -c ./config/test/jest.json --verbose --watchAll -i",
    "test:coverage": "rimraf coverage && jest -c ./config/test/jest.coverage.json --verbose"
  }
}
