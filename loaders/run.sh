#!/bin/sh
# node --loader=./loader.js --experimental-default-type=commonjs hello.js
# node --loader=./loader.mjs hello.mjs

node --import=./register.js hello.js
