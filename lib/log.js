'use strict';

const prettyjson = require('prettyjson');
const colors = require('./colors');

const log = {
    success: (input, ...other) => {console.log(`${colors.FgGreen}${input}${colors.Reset}`)},
    warning: (input, ...other) => {console.log(`${colors.FgYellow}${input}${colors.Reset}`)},
    danger:  (input, ...other) => {console.log(`${colors.FgRed}${input}${colors.Reset}`)},
    info:    (input, ...other) => {console.log(`${colors.FgBlue}${input}${colors.Reset}`)},
    error:   (input, ...other) => {console.log(`${colors.BgRed}${input}${colors.Reset}`)},
    json:    (input, ...other) => {console.log(prettyjson.render(input))},
};

module.exports = log;
