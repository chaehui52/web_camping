const express = require('express')
const cors = require('cors')
const app = express()
const login = require('./routers/login')
const file = require('./routers/file')
app.use(express.static('public'))
const hostname = '127.0.0.1'
const port = 3001
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use('/api/login', login)
app.use('/file', file)
app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
})
