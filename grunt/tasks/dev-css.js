const task = grunt => {
    grunt.registerTask('dev-css', ['sass:dev', 'postcss:dev']);
};

module.exports = task;
