const list = ['abc', 'dbv', 'nisse', 'lanes', 'danr', 'qwer', 'asdf', 'poire']

const times = 1000000


function assign () {
  for (let j = 0; j < times; j++) {
    for (let i = 0; i < list.length; i++) {
      let l = Object.assign([], list)
    }
  }
}

function slice () {
  for (let j = 0; j < times; j++) {
    for (let i in list) {
      let l = list.slice(0)
    }
  }
}

function concat () {
  for (let j = 0; j < times; j++) {
    let l = list.concat([])
  }
}

function concat2 () {
  for (let j = 0; j < times; j++) {
    let l = [].concat(list)
  }
}

// Start klokka
const start = new Date()

// Bytt til denne for å kjøre normal for-løkke
// assign()
// slice()
concat2()

// Bytt til denne for å teste es6:
// es6()

// Kalkuler sluttid
let end = new Date() - start

console.log(end)
