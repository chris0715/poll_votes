const express = require('express')
const app = express()
const config = require('../config')
const models = require('./models')
const cors = require('cors')
app.use(express.json())
app.use(cors())


app.get('/api/poll', (req, res) => {
  models.PollModel.findAll({
    include: {all: true}
  })
  .then(found => {
    res.send(found)
  })
})

app.get('/api/poll/:id', (req, res) => {
  const id = req.params.id
  models.PollModel.findById(id,{
    include: {all: true}
  })
  .then(found => {
    res.send(found)
  })
  .catch(err => {
    res.status(505).send(err)
  })
})


app.post('/api/poll', async (req, res) => {
  console.log(req.body)
 const createdPoll = await models.PollModel.create({
    title: req.body.title
  })
  req.body.options.forEach(option => {
     models.PollOptionsModel.create({
      name: option,
      pollId: createdPoll.id
    })
  })

 
})
app.listen(config.serverPort, _ => {
  console.log('Server is now on')
})