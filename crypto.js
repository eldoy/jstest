const timestamp = parseInt(new Date().getTime())
console.log({ timestamp })

const date = new Date(timestamp)
console.log(date)

const crypto = require('crypto')

const algorithm = 'aes-192-cbc'
const password = 'Password used to generate key'
const key = crypto.scryptSync(password, 'salt', 24)
const iv = Buffer.alloc(16, 0)
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = ''
cipher.on('readable', () => {
  let chunk
  while (null !== (chunk = cipher.read())) {
    encrypted += chunk.toString('hex')
  }
})
cipher.on('end', () => {
  console.log(encrypted)
})

cipher.write('some clear text data')
cipher.end()
