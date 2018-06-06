class CustomError extends Error {
  constructor (foo = 'bar', ...params) {
    super(...params)

    this.foo = foo
    this.date = new Date()
  }
}

try {
  throw new CustomError('error for faen', 'bazMessage')
} catch(e) {
  console.log(e.foo)
  console.log(e.name)
  console.log(e.message)
  console.log(e.stack)
}

