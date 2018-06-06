// Forward to target
let target = {}
let proxy = new Proxy(target, {})
proxy.a = 45
// console.log(target.a)


class Target {
  constructor (a, b) {
    this.a = a
    this.b = b
  }
}

let handler = {

  construct(obj, args) {
    console.log('CONSTRUCT')
    console.log(obj)
    console.log(args)

    return new obj(...args)
  },

  get: function (obj, prop) {
    console.log('GETTING')
    return obj[prop]
  },

  set: function (obj, prop, val) {
    console.log('SETTING')
    obj[prop] = val
    return val
  }
}

Person = new Proxy(Target, handler)
let m = new Person('test', 'man')
m.asdf = 'test3'

console.log(m.asdf)
console.log(m.a)
console.log(m.b)


// Testing apply
function hello (args) {
  console.log('CALLING HELLO: ', args)
}

handler = {
  apply: function (obj, self, args) {
    console.log('APPLY: ', obj, self, args)

    return obj('nils2')
  }
}

let p = new Proxy(hello, handler)

p('nils')


