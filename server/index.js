const express = require('express')
const app = express()
const config = require('../config')
const models = require('./models')
const cors = require('cors')
const passport = require('./setupPassport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const path = require('path')
const auth = require('./routes/auth')
const morgan = require('morgan')
const cookierParser = require('cookie-parser')

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
app.use(morgan('dev'))
app.use(session({
  secret: 'Apple',
  saveUninitialized: true,
  resave:true
}))
app.use(cookierParser())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(cors({
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders:'* '
}))

app.use('/auth', auth)

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
  console.log('Server is now on', config.serverPort)
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve('..','client','build','index.html'))
})