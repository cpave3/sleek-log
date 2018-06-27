'use strict';

const colors    = require('./colors')
    , printjson = require('./printjson');

const Log = {
    success: (input) => {console.log(`${colors.FgGreen}${input}${colors.reset}`)},
    warning: (input) => {console.log(`${colors.FgYellow}${input}${colors.reset}`)},
    danger:  (input) => {console.log(`${colors.FgRed}${input}${colors.reset}`)},
    info:    (input) => {console.log(`${colors.FgBlue}${input}${colors.reset}`)},
    error:   (input) => {console.log(`${colors.BgRed}${input}${colors.reset}`)},
    json:    (input) => {console.log(printjson(input))},
};

module.exports = Log;
