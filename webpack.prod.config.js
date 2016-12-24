/* eslint-disable */
var webpack = require('webpack');
var devConfig = require('./webpack.config');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

devConfig.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new UglifyJsPlugin({ minimize: true })
);

module.exports = devConfig;
