const _ = require('lodash')

let config = {
  settings: {
    access: {
      source: {
        db: 'nisse'
      }
    }
  }
}

function unroll (o, path) {
  return path.split('.').map(function (r) {
    let v = o
    o = o[r] || {}
    return typeof v === 'string' ? v : Object.values(v)[0]
  })
}

let res = unroll(config, 'settings.access.source.db')

console.log(res)

config = {
  project: {
    schema: {
      fields: {
      }
    }
  }
}

res = unroll(config, 'project.schema')

console.log(res)

config = {
  project: {
  }
}

res = unroll(config, 'project.schema.fields')
console.log(res)
