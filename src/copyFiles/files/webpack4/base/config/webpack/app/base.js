const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../../helpers');

module.exports = merge(common, {
  context: helpers.resolveFromRootPath('src'),
  entry: {
    app: ['./index.ts'],
    vendor: ['@babel/polyfill', 'whatwg-fetch'],
    appStyles: [],
    vendorStyles: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
          babelCore: '@babel/core',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
});
