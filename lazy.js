var _require = require
var require = function (moduleName) {
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

var app = {}
app.layouts = {}
app.pages = {}
app.layouts.main = require('./app/layouts/main.js')

app.layouts.main()

// console.log('Before require')

// var a = require('./module')
// console.log('After require')
// console.log(a.d)
// console.log('After log module')
