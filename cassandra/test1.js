const cassandra = require('cassandra-driver')
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'cycling'
})

function printResult(result) {
  console.log(JSON.stringify(result, null, 2))
}

async function insert() {
  console.log('INSERTING')
  const query = `INSERT INTO cycling.users (name, email) VALUES ('Vidar', 'vidar@eldoy.com')`
  const result = await client.execute(query)
  printResult(result)
}

async function find() {
  console.log('FINDING')
  const query = 'SELECT name, email FROM users WHERE email = ?'
  const result = await client.execute(query, [ 'vidar@eldoy.com' ])
  printResult(result)
}

async function run() {
  await insert()
  await find()
}

run()
// CREATE TABLE IF NOT EXISTS cycling.users (name text, email text, PRIMARY KEY (email));
