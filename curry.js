const partial = x => y => x + y

let sum2 = partial(2)

console.log(sum2(3))
console.log(sum2(7))
