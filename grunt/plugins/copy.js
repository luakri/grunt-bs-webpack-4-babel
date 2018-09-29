const getRoot = require('../../build-utils/get-root');

const plugin = {
    options: {
        processContentExclude: [
            '.DS_Store',
            '.gitignore',
            '.sass-cache',
            'node_modules'
        ]
    },

    html: {
        files: [
            {
                expand: true,
                src: '**/*.html',
                cwd: getRoot('source'),
                dest: getRoot('build')
            }
        ]
    }
};

module.exports = plugin;
