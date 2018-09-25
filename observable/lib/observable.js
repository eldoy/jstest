const observable = ({ target, listener }) => {
  let proxy

  const get = (target, name) => {
    return Object.freeze(target[name])
  }

  const set = (target, name, value) => {
    target[name] = value
    listener(proxy)
  }

  proxy = new Proxy(target, { get, set })
  return proxy
}

module.exports = observable
