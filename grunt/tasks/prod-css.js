const task = grunt => {
    grunt.registerTask('prod-css', ['sass:prod', 'postcss:prod']);
};

module.exports = task;
