const task = grunt => {
    grunt.registerTask('prod', [
        'clean:build',
        'shell:prodjs',
        'prod-css',
        'copy-assets',
    ]);
};

module.exports = task;
