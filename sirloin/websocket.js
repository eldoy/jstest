const app = new (require('sirloin'))()
app.action('hello', async (req, res) => {
  return { hello: 'world' }
})