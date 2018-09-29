const props = {
    sass: 'SASS',
    title: ' Error',
    message: 'An error occured while compiling '
};

const plugin = {
    sass: {
        options: {
            title: props.sass + props.title,
            message: props.message + props.sass
        }
    }
};

module.exports = plugin;
