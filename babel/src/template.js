function h(t, ...d) {
  for (var r = '', i = 0; i < d.length; i++) r += t[i] + d[i]
  return r + t[i]
}

`<div>Hello</div>`

const data = { t: 'hello', a: 1 }
function component () {
  return `
    <div>
      ${data.t}
    </div>
    <button onclick="hello()">Click</button>
    <p>
      Yes
    </p>
    <div>${data.a}</div>
    <script>${hello}</script>
  `
}
let result = component()
result = component()
function hello() {
  console.log(this)
  alert("Hello")
}
console.log(result)

function list(data) {
  return `<ul>${ data.map(x => `<li>${x}</li>`)}</ul>`
}
list([1, 2, 3])