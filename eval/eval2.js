const vm = require('vm');
const fs = require('fs')
const strFunc = fs.readFileSync('./strfunc.js', 'utf8')
console.log(strFunc)
async function nisse () {
  setTimeout(function(){
    console.log('NISSE')
  }, 1000)
}

async function runCode(code) {
  return eval(code)
}

async function run () {

  // const BANER = 1

  const sandbox = { nisse: nisse, console: console, require: require}
  vm.createContext(sandbox)
  // const code = `(async function(){})()`
  const code = `(async function(){${strFunc}})()`
  // vm.runInContext(code, sandbox)
  // vm.runInThisContext(code)
  // eval(code)
  runCode(strFunc)

  // vm.runInContext(code, sandbox)



  // await eval('nisse()')
  // eval(strFunc)
  // console.log(BANER)


  // const e = eval
  // const BANER = 1
  // const func = require('./func.js')

  // console.log(h)

  // func.call(this)
  // const strFunc = fs.readFileSync('./strfunc.js', 'utf8')

  // console.log(strFunc)

  // const func = new Function('x', strFunc)
  // func(BANER)
}

console.time('eval')
// for (var i = 0; i < 10000; i++) {
run()
// }
console.timeEnd('eval')
