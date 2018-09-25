const listen = require('./listen')
const observable = require('./observable')

const observer = (obj) => {
  return observable({ target: listen(obj), listener: obj.update })
}

module.exports = observer