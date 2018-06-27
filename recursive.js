let i = 99999999

const recurse = (n = 0) => {
  if (n > i) {
    return n
  }
  // console.log(n)
  n = n + 1
  return recurse(n + 1)
}

let t = new Date()
console.log('RECURSE:', recurse())

t = new Date() - t
console.log(t)

t = new Date()
let q = 0
for (let j = 0; j < i + 1; j++) {
  q = q + 1
}
console.log('FOR:', q)
t = new Date() - t
console.log(t)





