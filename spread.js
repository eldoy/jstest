const t = { id: 1 }

console.log(t)

const v = { ...t }

console.log(v)
t.id = 2

console.log(v)
console.log(t)
