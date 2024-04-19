const Module = require('module')
for (let i = 0; !void console.log(i); i += 1) {
  const code = '/'.repeat(2 ** 27) // Nearly max string length. Let's crash fast!
  const filename = '/fake/path/to/file.js'
  new Module(filename, undefined)._compile(code, filename)
}
