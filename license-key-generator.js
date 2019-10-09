const bcrypt = require('bcryptjs')
const wcrypt = require('wcrypt')()

const email = 'vidar@eldoy.com'

const hash = bcrypt.hashSync(email, 10)

console.log(hash)
console.log(hash.length)

async function init() {
  const encoded = await wcrypt.encrypt(email)
  console.log(encoded)
  console.log(encoded.length)
}

init()
