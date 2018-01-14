const express = require('express')
const app = express()
const config = require('../config')
const models = require('./models')
const cors = require('cors')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy((username, password, done) => {
  models.UserModel.findOne({where: { username }})
  .then(result => {
    
  })
  .catch()
}))
app.use(express.json())
app.use(cors())
app.use()


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

app.post('/api/poll/vote', async (req, res) => {
  console.log('I am voting......')
  try {
    console.log(req.body)
    const { pollOptionId }  = req.body
    const Option = await models.PollOptionsModel.findById(pollOptionId)
    await Option.increment({
      count: 1
    })
    res.status(202).send(Option)
  } catch(e) {
      res.status(500).send({message: e.message})
  }
})


app.post('/api/poll', async (req, res) => {

  try {
    const createdPoll = await models.PollModel.create(req.body,{
      include: ['pollOptions']
    })
    res.status(202).send(createdPoll)
  } catch(e) {
    res.status(500).send(e)
  }


 
})
app.listen(config.serverPort, _ => {
  console.log('Server is now on')
})