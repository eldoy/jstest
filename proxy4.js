var { tree, basext } = require('extras')

function lazyload(modulePath) {
  var module
  return new Proxy(function () {}, {
    apply: function (target, name) {
      console.log({ modulePath })
      console.log('APPLYING IT', target, name)
      if (module) {
        console.log('Module already found')
        return module
      }
      console.log('REQUIRING IT')
      return module || (module = require(modulePath))
    }
  })
}

var files = tree('app')
console.log(files)

var file = files[0]
console.log(file)

var page = lazyload(file)

console.log(page)

var layout = page()

console.log(layout)

var html = layout()

console.log(html)

console.log(page)
var layout2 = page()
console.log(layout2)

var app = {
  page
}

console.log(app['page'])

// var app = []
// for (var file of files) {
//   var [base, ext] = basext(file)
//   console.log({ base, ext })

//   app.push(
//     new Proxy(
//       function () {

//       }
//     )
//   )
// }

// console.log(app[0]())

// var _require = require
// var lazy = function (moduleName) {
//   var module
//   return new Proxy(
//     function () {
//       if (!module) {
//         module = _require(moduleName)
//       }
//       return module.apply(this, arguments)
//     },
//     {
//       get: function (target, name) {
//         if (!module) {
//           module = _require(moduleName)
//         }
//         return module[name]
//       }
//     }
//   )
// }
