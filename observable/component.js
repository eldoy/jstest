const observer = require('./lib/observer')

class Component {
  constructor () {
    this.name = 'hello'
  }

  update (state) {
    console.log('STATE CHANGED:', state)
  }
}
const component = observer(new Component())

component.name = 'baner'
