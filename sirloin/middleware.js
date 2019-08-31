const app = new (require('sirloin'))()
app.use(async (req, res) => {
  return { hello: 'world' }
})