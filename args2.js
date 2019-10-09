const OPT = {
  url: 'mongodb://localhost:27017',
  name: 'mongopath',
  connection: {
    poolSize: 100,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
}

function run ({ url, name, connection } = OPT) {
  console.log(url, name, connection)
}

run()

run({ name: 'baner' })