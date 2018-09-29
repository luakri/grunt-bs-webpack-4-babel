const task = grunt => {
    grunt.registerTask('dev', [
        'clean:build',
        'shell:devjs',
        'dev-css',
        'copy-assets'
    ]);
};

module.exports = task;
