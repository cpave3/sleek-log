# Sleek Log
[![Build Status](https://travis-ci.org/cpave3/sleek-log.svg?branch=master)](https://travis-ci.org/cpave3/sleek-log)

Sleek Log is a minimalist, 0 dependency logging solution for node applications. The primary purpose of the package
is for ease of diagnostics in a meaningful way. Sleek allows you to output data to your terminal with helpful color coding, as well as more complex data structures such as JSON and arrays.

If you require persistent storage and rotation of logs for future reference, this is also possible. The logging persistence is heavily inspired by the Python core logging functionality, and works in a similar way on the surface.

If you need integrations, such as sending log data to 3rd party services like Slack, you can set up callbacks which will be triggered at certain log levels to inform you when something happens

## How to use

To instantiate a new ephemeral logger:

```
const Log = require('sleek-log'),
    , log = new Log();
```

## To do

  - Logging Persistence
  - Integration callbacks
  - Log rotation