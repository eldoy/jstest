const _ = require('lodash')

const t = {
  app: {
    config: {
      language: {
        default: 'en'
      },
      db: {
        url: 'mongodb://localhost:27017', name: 'yql'
      }
    },
    project: {
      schema: {
        fields: {
          name: {
            read: 'admin'
          }
        }
      }
    }
  }
}

const q = {
  app: {
    project: {
      schema: {
        fields: {
          name: {
            read: 'super',
            write: 'any'
          }
        }
      }
    }
  }
}

const h = _.merge(t, q)

console.log(JSON.stringify(h, null, 2))
console.log(JSON.stringify(t, null, 2))
