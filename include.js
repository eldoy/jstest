var lodash = require('lodash')

function something() {
  var test = $.t('hello')
  console.log(lodash.get)
  console.log('include', test)
}

module.exports = something
