var devConfig = require('./webpack.config');

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

devConfig.plugins.push(
  new UglifyJsPlugin({ minimize: true })
);
