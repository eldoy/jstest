const adapter = require('./mongodb')

console.log(adapter.db)

setTimeout(function() {
  console.log(adapter.db)
}, 3000)
