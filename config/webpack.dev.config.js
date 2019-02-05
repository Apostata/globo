// config files
const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const devServer = require('./devServer');

const nodeENV = process.env.NODE_ENV;
// eslint-disable-next-line no-console
console.log(nodeENV);

const webpack = {
  mode: nodeENV !== 'development' ? 'production' : 'development',
  context: path.resolve(__dirname, '../src'),
  entry: {
    main: '../index.js',
  },

  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../htdocs/assets'),
    publicPath: 'assets/',
  },
  devtool: nodeENV === 'production' ? 'source-map' : 'eval-source-map',
  module: {
    rules: loaders,
  },
  plugins,
  devServer,
  watch: true,
};

module.exports = webpack;
