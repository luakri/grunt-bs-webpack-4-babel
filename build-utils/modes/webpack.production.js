const getRoot = require('../get-root');

const mode = () => ({
    devtool: 'source-map',
    output: {
        path: getRoot('build'),
        filename: '[name].js'
    }
});

module.exports = mode;
