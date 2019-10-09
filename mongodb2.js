const mngo = require('mngo')
const { MongoClient } = require('mongodb')
let client
let db

const run = async () => {
  try {
    client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
    console.log('Connected.')

    const collection = client.db('baner').collection('users')

    const result = await collection.insertOne({ userId: 'asdf' })

    console.log(result)

    const fetch = await collection.findOne({ userid: 'asdf' })
    console.log(fetch)

  } catch (e) {
    console.log(e)
    console.log('Connect failed. Trying again')
    setTimeout(async () => {
      run()
    }, 1000)
  }
}

run()