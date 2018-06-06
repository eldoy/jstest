// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(resolve, 100, 'foo', 'bar')
//   resolve('foo', 'bar')
// })

// console.log(promise)

// // promise.finally((res) => {
// //   console.log('PROMISE FINALLY: ', res)
// // })

// promise.then((res, a) => {
//   console.log('RUNNING PROMISE: ', res, a)
// }).catch((res) => {
//   console.log('PROMISE ERROR: ', res)
// })


// console.log(promise)


var p = new Promise(function(resolve, reject) {
  console.log('In promise')
  resolve(Promise.resolve(2))
})

// p.then(function(v) {
//   console.log('THEN: ', v)
// })

Promise.all([p]).then(function(v) {
  console.log('ALL: ', v)
})
