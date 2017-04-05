'use strict';

const path = require('path');

const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');

let config = require('./webpack.config.js');

config.plugins = [];

module.exports = _.merge({}, config, {
  watch: true,
  output: {
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.resolve('./node_modules'),
    }]),
    new HtmlWebpackPlugin({
      template: './assets/html/index.ejs',
    }),
    new ProgressBarPlugin(),
  ],
});
