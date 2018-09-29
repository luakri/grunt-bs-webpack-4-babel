const webpack = require('webpack');

const mode = () => ({
    devtool: 'source-map',
    watch: true,
    mode: 'development',
    entry: {
        main: ['./source/index.js', 'webpack-hot-middleware/client']
    },
    output: {
        publicPath: '/',
        path: '/',
        filename: '[name].js',
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

module.exports = mode;
