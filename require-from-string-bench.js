var r = require('require-from-string')

for (let i = 0; !void console.log(i); i += 1) {
  var hello = r('module.exports = 1')
}
