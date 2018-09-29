const path = require('path');
const timer = require('grunt-timer');

const initialize = (grunt) => {
    timer.init(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/plugins'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                'notify_hooks': 'grunt-notify',
                'notify': 'grunt-notify'
            }
        },
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};

module.exports = initialize;