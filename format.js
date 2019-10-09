const util = require('util')

function t (value, ...args) {
  return util.format(value, ...args)
}

console.log(t('must be equal to %d', '5'))
