#!/usr/bin/env node

var requireFromString = require('require-from-string');
var cycles = 100000;
var delay = 10;

(function step() {
  for (var i = 0; i < cycles; i++) {
    requireFromString(`/* ${'x'.repeat(10*512*1024)} */`, '/fake/path/to/file.js')
  }
}());
