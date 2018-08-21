const mngo = require('mngo')
mngo.on('change', (a, m, d) => {
  console.log('CHANGE', a, m, d)
})
const r = require('./require')
