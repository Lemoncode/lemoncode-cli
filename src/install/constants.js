module.exports = {
  dependencies: {
    common: ['@babel/polyfill', 'whatwg-fetch'],
    react: ['react@16', 'react-dom@16', 'react-hot-loader@3', 'react-router@3'],
  },
  devDependencies: {
    common: [
      '@babel/cli',
      '@babel/core',
      '@babel/preset-env',
      'css-loader',
      'clean-webpack-plugin',
      'html-webpack-plugin',
      'file-loader',
      'node-sass',
      'sass-loader',
      'style-loader',
      'url-loader',
      'webpack-merge',
      'env-cmd',
      'rimraf',
    ],
    jest: [
      'enzyme',
      'enzyme-adapter-react-16',
      'enzyme-to-json',
      'identity-obj-proxy',
      'jest',
      'raf',
    ],
    typescript: {
      common: ['@types/node@8', '@types/webpack-env@1', 'tslint@5', 'typescript@3'],
      jest: ['@types/enzyme@3', '@types/jest', 'ts-jest'],
      webpack: ['tslint-loader'],
      react: [
        '@types/react@16',
        '@types/react-dom@16',
        '@types/react-hot-loader@3',
        '@types/react-router@3',
        'tslint-react@3',
      ],
    },
    react: [
      '@types/react@16',
      '@types/react-dom@16',
      '@types/react-hot-loader@3',
      '@types/react-router@3',
    ],
    webpack3: [
      'awesome-typescript-loader@4',
      'extract-text-webpack-plugin@3',
      'webpack@3',
      'webpack-dev-server@2',
    ],
    webpack4: [
      'awesome-typescript-loader',
      'mini-css-extract-plugin',
      'webpack-cli',
      'webpack@4',
      'webpack-dev-server@3',
    ],
  },
};
