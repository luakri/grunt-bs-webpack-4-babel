const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const argv = require('minimist')(process.argv.slice(2));

const isProd = argv.prod;
const webpackConfig = require('../../webpack.config')({
    mode: 'browsersync',
    presets: ['babel']
});

const getRoot = require('../../build-utils/get-root');

const getWebpackMiddleware = (middlewares = []) => {
    const compiler = webpack(webpackConfig);

    middlewares.push(
        webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }
        })
    );

    middlewares.push(webpackHotMiddleware(compiler));

    return middlewares;
};

module.exports = grunt => {
    grunt.registerTask('browsersync', function() {
        const done = this.async();
        let middlewares = [];

        if (!isProd) {
            middlewares = middlewares.concat(getWebpackMiddleware());
        }

        browserSync(
            {
                server: {
                    baseDir: [getRoot('build')],
                    middleware: middlewares
                },
                port: 3000,
                ui: {
                    port: 3001
                },
                ghostMode: {
                    links: false
                },
                files: ['build/css/**/*.css', 'build/*.html']
            },
            () => {
                if (!isProd) {
                    done();
                }
            }
        );
    });
};
