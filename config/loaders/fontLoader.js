module.export = { // loader para as fontes
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'font/[name].[ext]', // Output below ./fonts
        publicPath: '../', // Take the directory into account
      },
    },
  ],
};
