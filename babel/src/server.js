const hello = require('./lib/hello.js')

async function init () {
  await new Promise(r => setTimeout(r, 2000))
  hello('DONE')
}

function list(data) {
  return `<ul>${ data.map(x => `<li>${x}</li>`)}</ul>`
}
list([1, 2, 3])