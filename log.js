const obj = { test: '1', a: { b: 6 } }
console.log('Hello %o', obj)


const log = (...args) => {
  console.log(...args)
}

log('Hello %o', obj)

