const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    }, // css para js
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader', // transpila sass para css
    },
  ],
};
