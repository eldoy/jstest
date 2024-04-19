var { tree, basext, env } = require('extras')

function lazy(mod, path) {
  return mod === undefined ? env(path) : mod
}

function lazyload(path) {
  var mod
  var handler = {
    get: (target, prop) => {
      mod = lazy(mod, path)
      return Reflect.get(mod, prop)
    },
    apply: (target, self, args) => {
      mod = lazy(mod, path)
      return Reflect.apply(mod, self, args)
    },
    construct: (target, args) => {
      mod = lazy(mod, path)
      return Reflect.construct(mod, args)
    }
  }
  return new Proxy(function () {}, handler)
}

var files = tree('app')
console.log(files)

var config = lazyload(files[0])

console.log(config.apikey)

// var setting = env.deep.man

// console.log(setting)
