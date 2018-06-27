'use strict';

const colors    = require('./colors')
    , printjson = require('./printjson');

const Log = {
    success: (input) => {console.log(`${colors.FgGreen}${input}${colors.Reset}`)},
    warning: (input) => {console.log(`${colors.FgYellow}${input}${colors.Reset}`)},
    danger:  (input) => {console.log(`${colors.FgRed}${input}${colors.Reset}`)},
    info:    (input) => {console.log(`${colors.FgBlue}${input}${colors.Reset}`)},
    error:   (input) => {console.log(`${colors.BgRed}${input}${colors.Reset}`)},
    json:    (input) => {console.log(printjson(input))},
};

module.exports = Log;
