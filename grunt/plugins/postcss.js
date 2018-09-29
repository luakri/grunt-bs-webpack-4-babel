const setOptions = (isProd = false) => {
    const props = {
        src: 'build/css/main.css',
        options: {
            processors: [
                require('autoprefixer')({
                    browsers: ['> 1%', 'IE 9', 'iOS 8']
                })
            ]
        }
    };

    if (!isProd) {
        props.options.map = true
    }

    return props;
};

module.exports = {
    dev: setOptions(),
    prod: setOptions(true)
};
