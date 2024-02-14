#!/usr/bin/env node

var requireFromString = require('require-from-string');
var cycles = 100000;
var delay = 10;

(function step() {
  requireFromString(`/* ${'x'.repeat(10*512*1024)} */`, '/fake/path/to/file.js');

  if (--cycles > 0) {
    setTimeout(step, delay);
  }
}());
