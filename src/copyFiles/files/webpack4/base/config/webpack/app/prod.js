const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('../../helpers');

const outputPath = helpers.resolveFromRootPath('dist');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: outputPath,
    filename: 'js/[chunkhash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[chunkhash].[name].css',
      chunkFilename: 'css/[chunkhash].[id].css',
    }),
    new CleanWebpackPlugin(outputPath),
  ],
});
