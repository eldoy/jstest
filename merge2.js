const _ = require('lodash')

let test = {
  config: {
    settings: {
      db: {
        name: 'baner'
      }
    }
  }
}
let d = {
	config: {
    settings: {
      db: {
        name: 'yql',
        url: 'mongodb://localhost:27017'
      }
    }
  }
}

// _.merge(test, d)

_.mergeWith(test, d, (objValue, srcValue) => {
  console.log(objValue)
  console.log(srcValue)
  return objValue || srcValue
})

console.log(JSON.stringify(test))