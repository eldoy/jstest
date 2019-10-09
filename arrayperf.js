const a = []
console.time('load')
for (let i = 0; i < 1000000; i++) {
  a.push({ id: i })
}
console.timeEnd('load')

console.time('findearly')
let res = a.find(x => x.id === 100)
console.log(res)
console.timeEnd('findearly')

console.time('findlate')
res = a.find(x => x.id === 999999)
console.log(res)
console.timeEnd('findlate')

console.time('filterearly')
res = a.filter(x => x.id === 100)
console.log(res)
console.timeEnd('filterearly')

console.time('filterlate')
res = a.filter(x => x.id === 999999)
console.log(res)
console.timeEnd('filterlate')

console.time('forearly')
res = undefined
for (let i = a.length - 1; i >= 0; i--) {
  if (a[i].id === 100) {
    res = a[i]
    break
  }
}
console.log(res)
console.timeEnd('forearly')

console.time('forlate')
res = undefined
for (let i = a.length - 1; i >= 0; i--) {
  if (a[i].id === 999999) {
    res = a[i]
    break
  }
}
console.log(res)
console.timeEnd('forlate')

console.time('convertarraytoset')
const set = new Set(a)
console.timeEnd('convertarraytoset')

let b = {}
for (const e of a) {
  b[e.id] = e
}

console.time('objectearly')
res = b[100]
console.log(res)
console.timeEnd('objectearly')

console.time('objectlate')
res = b[999999]
console.log(res)
console.timeEnd('objectlate')


c = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < c.length; i++) {
  console.log(i)
  if (i === 5) {
    break
  }
}