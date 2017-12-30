const express = require('express')
const app = express()
const config = require('../config')
const models = require('./models')
app.use(express.json())

app.post('/api/poll', (req, res) => {
  models.pollModel.create(req.body)
})

app.listen(config.serverPort, _ => {
  console.log('Server is now on')
})