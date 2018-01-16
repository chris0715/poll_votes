const passport = require('passport')
const LocalStrategy = require('passport-local')
const models = require('./models')


passport.use(new LocalStrategy((username, password, done) => {
  models.UserModel.findOne({where: { username }})
  .then(result => {
    done(null, result)
  })
  .catch()
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((user, done) => {
  models.UserModel.findById(user)
  .then((result) => {
    done(null, result )
  })
  .catch(e => {
    done(e)
  })
})

module.exports = passport