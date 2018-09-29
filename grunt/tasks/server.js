const argv = require('minimist')(process.argv.slice(2));
const isProd = argv.prod;

const task = grunt => {
    const tasks = isProd ? ['browsersync'] : ['clean:build', 'dev-css', 'copy-assets', 'browsersync', 'watch'];

    grunt.registerTask('server', tasks);
};

module.exports = task;
