'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const SplitByPathPlugin = require('webpack-split-by-path');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.resolve('./node_modules'),
    }]),
    new HtmlWebpackPlugin({
      template: './assets/html/index.ejs',
    }),
  ],
  stats: {
    assets: false,
    hash: false,
    version: false,
    timings: false,
  },
};
