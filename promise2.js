const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

const later = () => {
  return new Promise((resolve, reject) => {
    console.log('First!')
    setTimeout(() => {
      console.log('Later!')
      resolve('hello')
    }, 2000)
  })
}

later().then((res) => {
  console.log(res)
})

const laterWithEvent = () => {
  return new Promise((resolve, reject) => {
    console.log('FIRST!')

    myEmitter.once('message', (msg) => {
      console.log('MESSAGE: ', msg)
      resolve(msg)
    })
  })
}

laterWithEvent().then((res) => {
  console.log('IN THEN: ', res)
})

laterWithEvent().then((res) => {
  console.log('IN THEN2: ', res)
})

setTimeout(() => {
  myEmitter.emit('message', 'baner')
}, 3000)

setTimeout(() => {
  myEmitter.emit('message', 'baner2')
}, 5000)

