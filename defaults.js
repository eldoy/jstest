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

const defaults = {
  'config.settings.db.name': 'yql',
  'config.settings.db.url': 'mongodb://mongodb:27017'
}

for (const k in defaults) {
  if (!_.get(test, k)) {
    _.set(test, k, defaults[k])
  }
}

console.log(JSON.stringify(test))

