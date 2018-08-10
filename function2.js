// function main (arg) {
//   var hello = 'world'

//   // This function is only visible in this scope
//   function inner () {
//     console.log(arg)   // works
//     console.log(hello) // works
//   }
//   inner()              // works
// }

// main('pass it') // works
// inner()         // doesn't work, ReferenceError: inner is not defined

// function main (arg) {
//   var hello = 'world'
//   inner(arg, hello) // works
// }

// // This function is visible in the "global" scope
// function inner (arg, hello) {
//   console.log(arg)   // works
//   console.log(hello) // works
// }

// main('pass it')             // works
// inner('something', 'world') // works since inner is visible in this scope
