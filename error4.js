class CustomError extends Error {

}

const e = new CustomError('hello')
e.name = 'CustomError'
e.code = 3000
// Error.captureStackTrace(e)
// console.log(e.stack)
// console.log(e.code)

try {
  throw e
} catch (a) {
  console.log(a.code)
  console.log(a.message)
  console.log(a.name)
  console.log(a.stack)
}
