/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'hackernews': path.join(__dirname, '/src/index.js')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:6].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hacker News',
        template: 'index.html'
      })
    ]
};
