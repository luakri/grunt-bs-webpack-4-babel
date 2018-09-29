const getRoot = require('../../build-utils/get-root');

const plugin = {
    options: {
        spawn: false
    },

    sass: {
        files: [getRoot('source') + '/sass/**/*.scss'],
        tasks: ['dev-css']
    },

    html: {
        files: [getRoot('source') + '/*.html'],
        tasks: ['copy:html']
    }
};

module.exports = plugin;
