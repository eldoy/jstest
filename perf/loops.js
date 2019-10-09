const _ = require('lodash')

const N = 100000000
let tmp
const numbers = [1,2,3,4,5,6,7,8,9,10];

console.time('letfor-normal')
for (let p = 0; p < N; p++) {
  for (let i =  0; i < numbers.length; i++) {
    tmp = numbers[i]
  }
}
console.timeEnd('letfor-normal')

console.time('letfor-normal-internal')
for (let p = 0; p < N; p++) {
  for (let i =  0, l = numbers.length; i < l; i++) {
    tmp = numbers[i]
  }
}
console.timeEnd('letfor-normal-internal')

console.time('varfor-normal')
for (let p = 0; p < N; p++) {
  for (var i = 0; i < numbers.length; i++) {
    tmp = numbers[i]
  }
}
console.timeEnd('varfor-normal')

console.time('varfor-normal-internal')
for (let p = 0; p < N; p++) {
  for (var i = 0, l = numbers.length; i < l; i++) {
    tmp = numbers[i]
  }
}
console.timeEnd('varfor-normal-internal')

console.time('varfor-reversed')
for (let p = 0; p < N; p++) {
  for (var i = numbers.length-1; i >= 0; i--) {
    tmp = numbers[i]
  }
}
console.timeEnd('varfor-reversed')

console.time('letfor-reversed')
for (let p = 0; p < N; p++) {
  for (let i = numbers.length-1; i >= 0; i--) {
    tmp = numbers[i]
  }
}
console.timeEnd('letfor-reversed')

console.time('for-of')
for (let p = 0; p < N; p++) {
  for (const n of numbers) {
    tmp = n
  }
}
console.timeEnd('for-of')

console.time('foreach-vanilla')
for (let p = 0; p < N; p++) {
  numbers.forEach(function (n) {
    tmp = n
  })
}
console.timeEnd('foreach-vanilla')

console.time('map-vanilla')
for (let p = 0; p < N; p++) {
  numbers.map(function (n) {
    tmp = n
  })
}
console.timeEnd('map-vanilla')

console.time('filter-vanilla')
for (let p = 0; p < N; p++) {
  numbers.filter(function (n) {
    tmp = n
  })
}
console.timeEnd('filter-vanilla')

console.time('foreach-lodash')
for (let p = 0; p < N; p++) {
  _.forEach(numbers, function (n) {
    tmp = n
  })
}
console.timeEnd('foreach-lodash')






