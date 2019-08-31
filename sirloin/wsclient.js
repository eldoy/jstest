var ws = new WebSocket('ws://localhost:3004')
ws.onopen = function (event) {
  console.log('open')
  ws.send(JSON.stringify({ action: 'disconnect' }))
}
ws.onclose = function (event) {
  console.log('close')
}
ws.onerror = function (event) {
  console.log('error')
}
