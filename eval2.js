class Test {
  constructor () {
    this.baner = 5
    this.hello = 6
  }
}

const test = new Test()

const code = 'console.log(baner, hello); baner = 7'

let fn = `(async function ({ baner, hello }){${code}})(test)`

eval(fn)


console.log(test)
