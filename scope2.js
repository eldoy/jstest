const params = 'no'

function a (params) {
  function b (params) {
    params = 'c'
  }
  b('bye')
  params = 'q'
}

a('hello')

console.log(params)