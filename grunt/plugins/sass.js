const sass = require('node-sass');

const optionsDev = {
    implementation: sass,
    sourceMap: true,
    sourceMapContents: true,
};

const optionsProd = { ...optionsDev, ...{ outputStyle: 'compressed' } };

const setOptions = (isProd = false) => {
    let SASS_FILE_MAP = {};

    SASS_FILE_MAP['build/css/main.css'] = 'source/main.scss';

    return {
        options: isProd ? optionsProd : optionsDev,
        files: SASS_FILE_MAP
    };
};

module.exports = {
    dev: setOptions(),
    prod: setOptions(true)
};
