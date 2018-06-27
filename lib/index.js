'use strict';

<<<<<<< HEAD
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
=======
const log = require('./log');

module.exports = log;

>>>>>>> c081b002853799f68f9aa3a00dada755b2d09c15
