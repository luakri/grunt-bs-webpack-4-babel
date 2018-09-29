# Base Web Project Grunt

Base Web Project using: Grunt, Browsersync, Webpack 4, Babel 7 and Jest.

Development server is a combination of Browsersync + Webpack.
Webpack Hot Middleware watches js files and reloads browser.

## Developer Setup

Prerequisites
-------------

* [NVM](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org)
* [Grunt Command Line Interface (CLI)](https://github.com/gruntjs/grunt-cli)

Requirements
-------------

* Nodejs v.8.11.4

        nvm ls-remote
        nvm install 8.11.4
        nvm use 8.11.4

* Please download the [Editor Config](http://editorconfig.org/) plugin for your code editor

* From the Terminal:

        npm install -g grunt-cli
        grunt

## Starting Up The Project

* ```npm i``` to install project dependencies.

* ```npm run dev``` to run webpack dev mode.

* ```npm run prod``` to run webpack prod mode.

* ```grunt``` to build the project for development.

* ```grunt prod``` to run the production build.

* ```grunt dev``` to run the development build.

* ```grunt server ``` to build the project for development and open a browser instance with watch.

* ```grunt server --prod``` to serve the build files without webpack.

* ```npm run test:web:jest``` to run jest.

* ```npm run test:web:jest:update``` to run jest with updated snapshots.

* ```npm run test:web:jest:coverage``` to run jest with coverage.

* ```npm run test:web:jest:cache``` to clear jest cache.
