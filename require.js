const mngo = require('mngo')
var $db
async function init() {
  $db = await mngo.connect()
  console.log('Connected')
  setTimeout(function(){
    $db('project').insert({ baner: 'Hei' })
  }, 3000)
}

init()

module.exports = {}
