const jsLoader = require('./loaders/jsLoader');
const cssLoader = require('./loaders/cssLoader');
const fontLoader = require('./loaders/fontLoader');

const loaders = [];
loaders.push(jsLoader);
loaders.push(cssLoader);
loaders.push(fontLoader);

module.exports = loaders;
