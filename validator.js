// Forward to target
let target = {}

// Validator, normal function
let validator = {
  set: function (obj, prop, val) {

    if (prop === 'age') {
      if (!Number.isInteger(val)) {
        throw new TypeError('The age is not an integer')
      }
    }

    obj[prop] = val

    return true
  }
}

target = {}
let p = new Proxy(target, validator)

// p.age = '5'
p.age = 5

console.log(p.age)
console.log(target.age)


// Validator, ES6 class
class Validator {
  set (obj, prop, val) {

    if (prop === 'name') {
      if(typeof(val) !== 'string') {
        throw new TypeError('Name must be a string')
      }
    }
    obj[prop] = val

    return true
  }
}

p = new Proxy({}, new Validator())
p.age = 6
p.name = 'nisse'
p.name = 4

console.log(p.age)
console.log(p.name)
