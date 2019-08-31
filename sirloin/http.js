const app = new (require('sirloin'))()
app.get('/', async (req, res) => {
  return { hello: 'world' }
})