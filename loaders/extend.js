var Module = require('module')
var fs = require('node:fs')

var count = 0

Module._extensions['.js'] = function (module, filename) {
  var content = fs.readFileSync(filename, 'utf8')
  if (filename.endsWith('.fun.js')) {
    content = content.replace(/^hello =/g, 'var hello =')
    content = content.replace('log', 'console.log')
    content = `module.exports = 2`
  }
  count++
  module._compile(content, filename)
}

var lib = require('./lib.fun.js')

console.log({ lib })

// var lib = require('./lib.js')

// var lib = require('./lib.js')

console.log({ count })
