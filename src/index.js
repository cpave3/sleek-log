'use strict';

const   prettyjson = require('prettyjson');
const   colors = {
            Reset:    "\x1b[0m",
            FgRed:    "\x1b[31m",
            FgGreen:  "\x1b[32m",
            FgYellow: "\x1b[33m",
            FgBlue:   "\x1b[34m",
            BgRed:    "\x1b[41m",
        }

const Log = {
    success: (input, ...other) => {console.log(`${colors.FgGreen}${input}${colors.Reset}`)},
    warning: (input, ...other) => {console.log(`${colors.FgYellow}${input}${colors.Reset}`)},
    danger:  (input, ...other) => {console.log(`${colors.FgRed}${input}${colors.Reset}`)},
    info:    (input, ...other) => {console.log(`${colors.FgBlue}${input}${colors.Reset}`)},
    error:   (input, ...other) => {console.log(`${colors.BgRed}${input}${colors.Reset}`)},
    json:    (input, ...other) => {console.log(prettyjson.render(input))},
};

module.exports = Log;

