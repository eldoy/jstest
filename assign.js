let t = { a: 1 }

console.log(t)

Object.assign({}, t, { b: 2 })

console.log(t)

let a = { ...t, ...{ c: 3 } }

console.log(t)

let b = Object.assign({}, { poolSize: 100 }, { poolSize: 5 })

console.log(b)
let options = {}

let c = { ...{ poolSize: 100}, ...options}
console.log(c)
