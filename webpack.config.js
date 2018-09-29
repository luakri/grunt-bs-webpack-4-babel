const webpackMerge = require('webpack-merge');

const modeConfig = env =>
    require(`./build-utils/modes/webpack.${env.mode}.js`)(env);
const presetConfig = require('./build-utils/load-presets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge(
        {
            mode,
            entry: {
                main: './source/index.js'
            }
        },
        modeConfig({ mode, presets }),
        presetConfig({ mode, presets })
    );
};
