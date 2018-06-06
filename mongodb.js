const { MongoClient, ObjectId } = require('mongodb')

var adapter = {}

const url = 'mongodb://localhost:27017'
const name = 'yql'

const connect = () => {
  // Connect to mongodb
  MongoClient.connect(url)
  .then((client) => {
    console.log(`Db connection: ${url}/${name}`)
    adapter.db = client.db(name)
  })
  .catch((err) => {
    console.log('ERROR: Could not connect to DB: ', err)
  })
}

connect()

module.exports = adapter
