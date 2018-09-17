var handler = {
  get: function(obj, prop) {
    console.log('GETTING', prop)
    return prop in obj ? obj[prop] : 37
  }
}

var p = new Proxy({}, handler);
console.log(p.a)

p.a = 1;
p.b = undefined;

console.log(p.a)


class Target {
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  hello (name) {
    console.log(name)
  }
}

handler = {

  construct(obj, args) {
    console.log('CONSTRUCT')
    console.log(obj)
    console.log(args)

    return new obj(...args)
  },

  get: function (obj, prop) {
    console.log('GETTING')
    // return obj[prop]
    return obj.hello(prop)
  },

  set: function (obj, prop, val) {
    console.log('SETTING')
    obj[prop] = val
    return val
  }
}

target = new Target()
p = new Proxy(target, handler)
p.account= 'hello'
p.account
