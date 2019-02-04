const jsLoader = require('./loaders/jsLoader');
const cssLoader = require('./loaders/cssLoader');
const fontLoader = require('./loaders/fontLoader');

const loaders = [];
loaders.push(jsLoader);
loaders.push(fontLoader);
loaders.push(cssLoader);


module.exports = loaders;
