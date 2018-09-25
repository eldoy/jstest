const listen = (target) => {
  return new Proxy(target, {
    get: (target, name) => {
      return target[name]
    },
    set: (target, name, value) => {
      target[name] = value
    }
  })
}

module.exports = listen