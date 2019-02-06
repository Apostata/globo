var express = require('express');
var app = express();
const products = require('../htdocs/data.json');

app.use('/', express.static('htdocs'));

app.get('/json', (req, res) => {
  res.send(products);
});

app.listen(3000, () => {
	console.log('listen on http://localhost:3000');
});
