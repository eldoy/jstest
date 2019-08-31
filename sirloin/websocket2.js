const Sirloin = require('sirloin')
const app = new Sirloin({ port: 3004 })
app.action('disconnect', (data, client) => {
  console.log('HELLO')
  setTimeout(() => {
    console.log('DISCONNECTING')
    client.terminate()
  }, 3000)
})