const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('../../helpers');

const outputPath = helpers.resolveFromRootPath('dist');

module.exports = merge(base, {
  output: {
    path: outputPath,
    filename: 'js/[chunkhash].[name].js',
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[chunkhash].[name].css',
      disable: false,
      allChunks: true,
    }),
    new CleanWebpackPlugin(outputPath),
  ],
});
