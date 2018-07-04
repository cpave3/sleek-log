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
    colorMode: 'heading',
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
        this.colorMode = config.colorMode;

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
                this.logWriter.write(`[${new Date().toISOString()}] ${level.toUpperCase()} ${JSON.stringify(data)}\r\n`);
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

    log(level, data, args) {
        this.emit(level, data);
        let coloredData = '';
        let plainData;
        switch (this.colorMode) {
            case 'all':
            // All incomming data will be composited and colored
                coloredData = `${data} ${JSON.stringify(args)}`;
                break;
            case 'heading':
            default:
            // Only the log level will be colored, other data will be as normal
                coloredData = `${level}:`;
                plainData = `${data} ${JSON.stringify(args)}`; 
                break;

        }
        switch (level) {
            case 'success':
                console.log(`${colors.FgGreen}${coloredData}${colors.reset}${plainData ? ` ${plainData}` : ''}`);
                break;
            case 'warning':
            console.log(`${colors.FgYellow}${coloredData}${colors.reset}${plainData ? ` ${plainData}`: ''}`);
                break;
            case 'danger':
                console.log(`${colors.FgRed}${coloredData}${colors.reset}${plainData ? ` ${plainData}` : ''}`);
                break;
            case 'info':
                console.log(`${colors.FgBlue}${coloredData}${colors.reset}${plainData ? ` ${plainData}` : ''}`);
                break;
            case 'error':
                console.log(`${colors.BgRed}${coloredData}${colors.reset}${plainData ? ` ${plainData}` : ''}`);
                break;
            case 'json':
            case 'debug':
                console.log(printjson(data));
                break;
        }
    }
    
    success(input) {
        this.log('success', input, helpers.extractArguments(arguments));
    }
    warning(input) {
        this.log('warning', input, helpers.extractArguments(arguments));
    }
    danger(input) {
        this.log('danger', input, helpers.extractArguments(arguments));
    }
    info(input) {
        this.log('info', input, helpers.extractArguments(arguments));
    }
    error(input) {
        this.log('error', input, helpers.extractArguments(arguments));
    }
    debug(input) {
        this.log('debug', input, helpers.extractArguments(arguments));
    }
    json(input) {
        this.log('json', input, helpers.extractArguments(arguments));
    }
}

module.exports = Log;
