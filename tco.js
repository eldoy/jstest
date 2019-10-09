// // function number(n) {
// //   console.log(n)
// //   if (n <= 1e10) {
// //     number(n+1)
// //   }
// // }
// number(1)

function number(n = 1) {
  if (n > 10e10) {
    return
  }
  console.log(n)
  number(n+1)
}
number()