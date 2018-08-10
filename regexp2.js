// let s = '/users/:userId/projects/:projectId'

let routes = [
  [ '/user', 'about' ],
  [ '/users/:userId/projects/:projectId', 'hello' ]
]

console.log(routes)
console.log()

let re = /\/:([^\/]+)/gi

const transform = () => {
  for (let route of routes) {
    let names = []
    let t = route[0].replace(re, function (match, m1) {
      // console.log(match, m1)
      names.push(m1)
      return '/([^\/]+)'
    })
    let rx = new RegExp(`^${t}$`)
    route[0] = rx
    route.push(names)
  }
}

transform()

console.log(routes)

// console.log(t)
// console.log(r)

// let m
// let r = []
// while(m = re.exec(s)) {
//   r.push(m)
//   console.log(m)
// }
