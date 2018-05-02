module.exports = {
  scripts: {
    "start": "env-cmd .env if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:dev": "env-cmd .env cross-env NODE_ENV=development webpack-dev-server --config ./config/webpack/app/dev.js",
    "start:prod": "env-cmd .env cross-env NODE_ENV=production webpack-dev-server --config ./config/webpack/app/prod.js",
    "build": "env-cmd .env if-env NODE_ENV=production && npm run build:prod || npm run build:dev",
    "build:dev": "rimraf dist && env-cmd .env cross-env NODE_ENV=development webpack --config ./config/webpack/app/dev.js",
    "build:prod": "rimraf dist && env-cmd .env cross-env NODE_ENV=production webpack -p --config ./config/webpack/app/prod.js",
    "test": "jest --verbose",
    "test:watch": "jest --verbose -i --watchAll",
    "test:coverage": "jest --verbose --coverage"
  },
  jest: {
    "testRegex": "(/specs/.*|\\.spec)\\.(ts|tsx)$",
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "ts",
      "tsx"
    ],
    "transform": {
      ".tsx?": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "setupFiles": [
      "<rootDir>/config/test/polyfills.js",
      "<rootDir>/config/test/setupTest.js"
    ],
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "moduleNameMapper": {
      "^.+\\.s?css$": "identity-obj-proxy"
    },
    "restoreMocks": true
  },
}
