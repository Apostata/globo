module.exports = { // loader para as imagens
  test: /\.(jpg|gif|png)$/,
  use: [
    {
      options: {
        name: 'media/[name].[ext]', // Output below ./fonts
        publicPath: '../', // Take the directory into account
      },
    },
  ],
};
