const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify() },
  }),

  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: './css/[name].css',
    chunkFilename: './css/[name].css',
  }),

  new HtmlWebpackPlugin({
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    template: '../htdocs/index.html',
    title: 'Link\'s Journal',
    inject: true,
  }),
];
