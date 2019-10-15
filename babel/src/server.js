const hello = require('./lib/hello.js')

async function init () {
  await new Promise(r => setTimeout(r, 2000))
  hello('DONE')
}

init()
