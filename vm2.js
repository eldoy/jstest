const {VM} = require('vm2')
const vm = new VM({
  timeout: 1000,
  sandbox: {}
})

try {
  vm.run(`a = [1]; while (true) a = [...a, ...a];`)
} catch(err) {
  console.log('ERROR IN SCRIPT:')
  console.log(err)
}
