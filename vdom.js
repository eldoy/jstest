class Observable {
  constructor (obj, caller, callback) {
    return (
      new Proxy(obj, {
        set: function (target, key, value) {
          console.log('SETTING:', key, value)

          target[key] = value

          if (callback) {
            callback()
          } else if (typeof caller.render === 'function') {
            console.log('RENDERING FROM PROXY')
            caller.render()
          }
        },

        get: function(target, key) {
          console.log('GETTING:', key, target[key])
          return target[key]
        }
      })
    )
  }
}

class List {
  constructor () {
    this.person = new Observable({ name: 'vidar' }, this)
  }

  render () {
    const html = `<p>${this.person.name}</p>`
    console.log('RENDERING:', html)
    return html
  }
}

const list = new List()
const result = list.render()
console.log(result)

list.person.name = 'Suong'
list.person.name = 'Baner'
