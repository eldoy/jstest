const EventEmitter = require('events')
class Mongo extends EventEmitter {
  constructor () {
    super()
    this.test = 1
  }
}

module.exports = new Mongo()
