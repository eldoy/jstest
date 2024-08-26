var { register } = require('node:module')
var { pathToFileURL } = require('node:url')

var file = pathToFileURL(__filename)

register('./loader.js', file)
