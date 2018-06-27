const x = 50000

// Unoptimizable, will throw stack size exceeded
const factorial1 = (n) => {
  // Base case
  if (n < 2) {
    return 1
  }

  return n * factorial1(n - 1)
}

let r = factorial1(x)
console.log('RESULT:', r)

// Optimizable?
const factorial2 = (n, a = 1) => {
  // Base case
  if (n < 2) {
    return a
  }

  return factorial2(n - 1, (n * a))
}

let r2 = factorial2(x)

console.log('RESULT:', r2)
