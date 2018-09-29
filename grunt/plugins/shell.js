const plugin = {
    devjs: {
        command: 'npm run webpack -- --env.mode development --env.presets babel'
    },
    prodjs: {
        command: 'npm run webpack -- --env.mode production --env.presets babel'
    }
};

module.exports = plugin;
