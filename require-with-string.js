var r = require('require-from-string')
var fs = require('fs')
var app = {}
app.include = require('./include.js')
var content = app.include.toString()
console.log(content)

if (content.indexOf('$.t')) {
  var file = fs.readFileSync('./include.js', 'utf8')
  file = file.replace("var test = $.t('hello')", "var test = 'hello'")
  console.log(file)
  var fn = r(file)
  console.log(fn.toString())
  fn()
}
