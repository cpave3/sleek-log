# Sleek Log

Sleek Log is a minimalist, 0 dependency pretty-logging solution for node applications. The primary purpose of the package
is for ease of diagnostics in a meaningful way. Sleek allows you to output data to your terminal with meanigful colors, using ANSI codes, as well as more complex data structures such as JSON and arrays

## How to use

To instantiate a new ephemeral logger:

```
const Log = require('sleek-log'),
    , log = new Log();
```