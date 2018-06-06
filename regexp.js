const re = /^\/(.+)\/([ig]{0,2})/

let t = "/test/g"

let matches = t.match(re)

// console.log(matches)

console.log(RegExp.$1, RegExp.$2)

let r = new RegExp(RegExp.$1, RegExp.$2)

console.log(r)
console.log(r.constructor)
