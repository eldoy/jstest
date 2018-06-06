const url = require('url')

let uri = 'mongodb://localhost:27017/yql'

let r = url.parse(uri)

console.log(r)


uri = 'yql'

r = url.parse(uri)

console.log(r)


uri = 'mongodb://localhost:27017/'

r = url.parse(uri)

console.log(r)
