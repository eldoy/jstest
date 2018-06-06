const _ = require('lodash')
const pluralize = require('pluralize')

let keys = ['projects', 0, 'task', 'comments', 0]
let graph = {
  projects: [{
    _id: 'project_id_1234',
    name: 'nisse',
    task: {
      _id: 'task_id_7890',
      description: 'baner',
      comments: [
        {
          _id: 'comment_id_5678',
          content: 'Hello'
        }
      ]
    }
  }]
}

keys = ['project', 'task', 'comments', 0]
graph = {
  project: {
    _id: 'project_id_1234',
    name: 'nisse',
    task: {
      _id: 'task_id_7890',
      description: 'baner',
      comments: [
        {
          _id: 'comment_id_5678',
          content: 'Hello'
        }
      ]
    }
  }
}

// console.log(graph)


const parents = () => {
  console.log('PARENTS')

  let p = []
  for (let i = keys.length - 1; i >= 0 ; i--) {
    console.log()
    let val = keys[i]
    console.log(val)

    if (Number.isInteger(val)) {
      val = keys[i - 1]
      val = pluralize.singular(val)
    }

    let list = keys.slice(0, i + 1)
    console.log(list)
    let obj = _.get(graph, list)
    console.log(obj)

    if (obj && obj.constructor === Object) {
      p.unshift([val, obj])
    }
  }
  return p
}

let p = parents()

console.log(p)

let result = p.reduce((r, x) => {
  if (x[1]._id) {
    r.push({ [x[0] + '_id']: x[1]._id })
  }
  return r
}, [])
console.log(result)

