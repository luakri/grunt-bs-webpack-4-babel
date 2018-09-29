const path = require('path');

const getRoot = arg => path.resolve(__dirname, '../', arg);

module.exports = getRoot;
