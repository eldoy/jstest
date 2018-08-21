const { MongoClient, ObjectId } = require('mongodb')

var adapter = {}

const url = 'mongodb://localhost:27017/?replicaSet=rs'
const name = 'yql'

const connect = () => {
  // Connect to mongodb
  MongoClient.connect(url)
  .then(async (client) => {
    console.log(`Db connection: ${url}/${name}`)
    adapter.db = client.db(name)
    const collection = adapter.db.collection('hello')
    const insert = await collection.insertOne({ nisse: 4 })
    console.log(insert)
    const hellos = await collection.find({}).toArray()
    console.log(hellos)
  })
  .catch((err) => {
    console.log('ERROR: Could not connect to DB: ', err)
  })
}

connect()

module.exports = adapter
