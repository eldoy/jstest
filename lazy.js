var _require = require
var lazy = function (moduleName) {
  var module
  return new Proxy(
    function () {
      if (!module) {
        module = _require(moduleName)
      }
      return module.apply(this, arguments)
    },
    {
      get: function (target, name) {
        if (!module) {
          module = _require(moduleName)
        }
        return module[name]
      }
    }
  )
}
var array = [1, 2, 3]

var lodash = lazy('lodash')

var result = lodash.concat(array, 5)

console.log(result)

var app = {}
app.layouts = {}
app.pages = {}
app.layouts.main = lazy('./app/layouts/main.js')

app.layouts.main()

// console.log('Before require')

// var a = require('./module')
// console.log('After require')
// console.log(a.d)
// console.log('After log module')
