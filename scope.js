var $db = { test: 2 }
var f = require('./function-require')

var t = f.toString()


console.log(t)
// eval('console.log($db)')
eval("var a = " + t)

a()