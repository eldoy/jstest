;(function (global) {
  function h(tag, ...c) {
    console.log(tag, c)
  }
  var context = {}
  context.h = h
  var f = new Function('a', 'b', 'c', 'console.log(this.h); return a + b')
  f.call(context, 1, 2)
  // f(1, 2, 3)
  // global is now the global
})(this)

// var f = new Function('a', 'b', 'return a + b')

// function h (tag, ...c) {
//   console.log(tag, c)
// }

// function makeFunction () {
//   var context = {}
//   context.n = 1
//   context.h = h
//   context.test = 'main'
//   return Function('...a', `return this.h(this.test)`).bind(context)
// }

// var f = makeFunction()

// var r = f()

// console.log(r)

// function h (tag, ...c) {
//   console.log(tag, c)
// }
// var t = 'main'
// var f = new Function('...a', 'return this("main")')
// f.bind(h)
// var r = f(1, 2)
