const list = ['abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire']

const times = 10000000


function splice () {
  for (let j = 0; j < times; j++) {
    let a = list.slice(0)
    a.splice(-2)
  }
}

function slice () {
  for (let j = 0; j < times; j++) {
    let a = list.slice(0)
    a.slice(0, -2)
  }
}

// Start klokka
const start = new Date()

// Bytt til denne for å kjøre slice
slice()

// Bytt til denne for å teste splice:
// splice()

// Kalkuler sluttid
let end = new Date() - start

console.log(end)
