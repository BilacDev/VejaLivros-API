// Entrypoint of application
require('dotenv').config()
// Init connection with database
const app = require('express')()

const port = process.env.PORT || 4000

const routes = require('./src/routes/routes')
const middlewares = require('./src/routes/middlewares')

app.use(middlewares)
app.use(routes)

app.listen(port, function() {
    console.log(`Server has started on http://localhost:${port}`)
})