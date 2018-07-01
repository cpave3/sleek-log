'use strict';

const EventEmitter = require('events');

const colors    = require('./colors')
    , printjson = require('./printjson')
    , helpers   = require('./helpers');

const logLevels = [
    'debug',
    'info',
    'success',
    'warning',
    'danger',
    'error'
]

const defaultConfig = {
    filename: null,
    level: 'debug',
};

class Log extends EventEmitter {
    constructor(config = {}) {
        super();
        // Repopulate the config with any missing defaults
        Object.keys(defaultConfig).forEach((key) => {
            if (!config[key]) {
                config[key] = defaultConfig[key];
            }
        });

        this.filename = config.filename;
        this.level = config.level;

        if  (this.filename) {
            // We should have been given the path to a file location
            helpers.initialiseLog(this.filename);
            this.logWriter = fs.createWriteStream(this.filename, {flags: 'a'});
            this._initialiseListeners();
        }
    }

    /**
     * This method spawns conditional listeners
     */
    _initialiseListeners() {
        const levelThreshold = logLevels.indexOf(this.level);
        const selectedLogLevels = logLevels.slice(levelThreshold);
        selectedLogLevels.forEach((level) => {
            this.registerCallback(level, (data) => {
                this.logWriter.write(`[${new Date().toISOString()}] ${level.toUpperCase()} ${data}\r\n`);
            });
        });
    }

    /**
     * Register a callback to happen at certain log levels
     * @param {String} level The level of logging for which this callback will fire
     * @param {Function} callback The function to execute when this log level occurs
     */
    registerCallback(level, callback) {
        this.on(level, data => {
            callback(data);
        });
    };

    log(level, data) {
        this.emit(level, data);
        switch (level) {
            case 'success':
                console.log(`${colors.FgGreen}${data}${colors.reset}`);
                break;
            case 'warning':
            console.log(`${colors.FgYellow}${data}${colors.reset}`);
                break;
            case 'danger':
                console.log(`${colors.FgRed}${data}${colors.reset}`);
                break;
            case 'info':
                console.log(`${colors.FgBlue}${data}${colors.reset}`);
                break;
            case 'error':
                console.log(`${colors.BgRed}${data}${colors.reset}`);
                break;
            case 'json':
            case 'debug':
                console.log(printjson(data));
                break;
        }
    }
    
    success(input) {
        this.log('success', input);
    }
    warning(input) {
        this.log('warning', input);
    }
    danger(input) {
        this.log('danger', input);
    }
    info(input) {
        this.log('info', input);
    }
    error(input) {
        this.log('error', input);
    }
    debug(input) {
        this.log('debug', input);
    }
    json(input) {
        this.log('json', input);
    }
}

module.exports = Log;
