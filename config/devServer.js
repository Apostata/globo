const path = require('path');
const products = require('../htdocs/data.json');

module.exports = {
  contentBase: path.join(__dirname, '../htdocs'), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  port: 3000,
  hot: true, // hot reload
  open: true, // initialize after bundle,
  overlay: true, // show errors overlay on screen
  before: (app) => {
    app.get('/json', (req, res) => {
      res.send(products);
    });
  },
};
