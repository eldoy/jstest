var _ = require('lodash')

var graph = {}

var keys = []

var project = {
  hello: 'Name'
}

var project2 = {
  hello: 'Name2'
}

var task = {
  baner: 'Nisse'
}

var task2 = {
  baner: 'Laner'
}

function print() {
  console.log('GRAPH: ', JSON.stringify(graph))
  // console.log('KEYS: ', JSON.stringify(keys))
  // console.log('GRAPH FROM KEYS: ', JSON.stringify(_.get(graph, keys)))
}

keys.push('projects')

_.set(graph, 'projects', [project, project2])

print()

keys.push('[0]', 'task')

// _.set(graph, 'projects[0].task', [project])
// graph['projects'][0]['task'] = task

_.set(graph, ['projects', 0, 'task'], task)
_.set(graph, ['projects', 1, 'task'], task2)

print()

