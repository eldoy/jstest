const external = require('./lib/external')
const mongo = require('./lib/mongo')

console.log(mongo.test)

mongo.on('hello', function() {
  setImmediate(() => {
    console.log('HELLO')
  })
})
