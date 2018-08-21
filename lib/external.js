const mongo = require('./mongo')

mongo.test = 2

setTimeout(function() {
  mongo.emit('hello')
}, 2000)

const external = {}

module.exports = external
