'use strict';

const EventEmitter = require('events');

const colors    = require('./colors')
    , printjson = require('./printjson');

const logLevels = [
    'debug',
    'info',
    'success',
    'warning',
    'danger',
    'error'
]

class Log extends EventEmitter {
    constructor(config = {}) {
        super();
        if (config && config.level && logLevels.includes(config.level)) {
            // We should have gotten a valid logging level
        }
        if (config && config.file) {
            // We should have been given the path to a file location
            // If it is a directory, we make out own file
            // If it is a file, we append to it
        }
    }
    
    success(input) {
        console.log(`${colors.FgGreen}${input}${colors.reset}`);
    }
    warning(input) {
        console.log(`${colors.FgYellow}${input}${colors.reset}`);
    }
    danger(input) {
        console.log(`${colors.FgRed}${input}${colors.reset}`);
    }
    info(input) {
        console.log(`${colors.FgBlue}${input}${colors.reset}`);
    }
    error(input) {
        console.log(`${colors.BgRed}${input}${colors.reset}`);
    }
    json(input) {
        console.log(printjson(input));
    }
}

module.exports = Log;
