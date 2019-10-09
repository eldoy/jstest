const Sirloin = require('sirloin')
const user = require('./routes/user')
const app = new Sirloin({ port: 4000 })
app.get('/', user.create)
