const redis = require('redis')
const client = redis.createClient()
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)

client.on("error", function (err) {
  console.log("Error " + err)
})

async function init () {
  const set = await client.setAsync('baner', 'nisse')
  console.log('SET:', set)
  const hello = await client.getAsync('baner')
  console.log('GET:', hello)
}

init()
