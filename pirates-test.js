var { addHook } = require('pirates')

function matcher(filename) {
  return true
}

var removeHook = addHook(
  function (code) {
    console.log(code)
    return code.replace('@@foo', "console.log('foo')")
  },
  {
    exts: ['.js'],
    matcher
  }
)

require('./foo.js')

// And later, if you want to un-hook require, you can just do:
// removeHook()
