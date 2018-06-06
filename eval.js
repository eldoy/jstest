var test = 1

// eval(`
//   console.log(test)
//   console.log("Baner")
// `)


const hello = (a, b) => {
  errors = []
  eval(`errors.push(['nisse', a, b])`)
  // return errors
  eval('return errors')
}

let baner = hello(2, 3)
console.log(baner)
