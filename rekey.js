const util = require('util')

const app = {
  routes: {
    '*': async function() {},
    '*/*': async function() {},
    '*/*@action': async function() {},
    '*/insert': async function() {},
    '*': async function() {},
    '*/*': async function() {},
    '*@action': async function() {},
    '*@after': async function() {},
    // '*@before': async function() {}
    'project@after': async function() {}
  }
}

for (const key in app.routes) {
  const [path, event] = key.split('@')
  const [model, action] = path.split('/')
  const nkey = `${model || '*'}/${action || '*'}@${event || 'action'}`
  const fn = app.routes[key]
  Object.defineProperty(fn, 'name', { value: nkey })
  delete app.routes[key]
  app.routes[nkey] = fn
}

console.log(util.format(app))

// *
// */*
// */*@action
// */insert
// */*
// *@action
// *@after
// *@before
