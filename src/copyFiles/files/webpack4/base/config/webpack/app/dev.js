const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('../../helpers');

const outputPath = helpers.resolveFromRootPath('dist');

module.exports = merge.strategy({
  entry: 'prepend',
})(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: outputPath,
    filename: 'js/[name].js',
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
          'style-loader',
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
  devServer: {
    contentBase: outputPath,
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(outputPath),
  ],
});
