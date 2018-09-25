const mngo = require('mngo')
const { MongoClient } = require('mongodb')
let client
let db

const run = async () => {
  try {
    client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
    console.log('Connected.')

  } catch (e) {
    console.log('Connect failed. Trying again')
    setTimeout(async () => {
      run()
    }, 1000)
  }
}
run()