# Sleek Log
[![Build Status](https://travis-ci.org/cpave3/sleek-log.svg?branch=master)](https://travis-ci.org/cpave3/sleek-log) 
[![npm](https://img.shields.io/npm/dw/sleek-log.svg)](https://www.npmjs.com/package/sleek-log)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cpave3/sleek-log.svg)](https://github.com/cpave3/sleek-log)

Sleek Log is a minimalist, 0 dependency logging solution for node applications. The primary purpose of the package
is for ease of diagnostics in a meaningful way. Sleek allows you to output data to your terminal with helpful color coding, as well as more complex data structures such as JSON and arrays.

If you require persistent storage and rotation of logs for future reference, this is also possible. The logging persistence is heavily inspired by the Python core logging functionality, and works in a similar way on the surface.

If you need integrations, such as sending log data to 3rd party services like Slack, you can set up callbacks which will be triggered at certain log levels to inform you when something happens

## How to use

There are a few different ways to use sleek-log, primarily:

  - ephemeral, stdout logging
  - persistent, writing to a log file
  - integrated, using event listeners to send the log data to external services.

### Ephermeral

To write log data to only the command line, you can simply instantiate a new logger as follows:

```
const Log = require('sleek-log'),
    , log = new Log();
```

### Persistent

To write log data to a file for archival purposes, you can instantiate a logger as follows:

```
const Log = require('sleek-log'),
    , log = new Log({ filename: '/path/to/file.log', level: 'warning' });
```

The above instance will log everything above the specified level. in this case, 'warning', 'danger', and 'error' (see [logging levels](#logging-levels) for more details)

### Integrated

There is still some work to do around integrated logging, but it should currently be usable in a more manual state as follows:

```
// First, create either a persistent or ephermeral logger
const Log = require('sleek-log')
    , log = new Log();

// Next, register a callback at your desired log level
log.registerCallback('danger', (logData) => {
    // Whenever a 'danger' level log is fired, this callback will be fired as well
    // You can do whatever you want with the data here, like send it to slack, or another service
});
```

## Logging Levels

To write data to your logs (depending on your config), once your logger has been created, you can write data to the following log levels:

  - debug
  - json (never written to the log file, but functionally equivalent to `debug` otherwise)
  - info
  - success
  - warning
  - danger
  - error

To write to a given level, simply call it as follows:

```
log.info('Something interesting has happened');
log.success('A process has completed');
log.warning('Something bad might happen');
log.danger('Running low on disk space');
log.error('An unexpected error has occured');
```

Depending on your selected log level, any log calls at - or above - your selected level will be written to the log file (if you are using a persistent log).

## To do

  - Log rotation
    - Need to implement log rotation functionality and modes (increments, date, etc...)
