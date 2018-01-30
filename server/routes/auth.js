const router = require('express').Router()
const passport = require('passport')

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user)
})
router.get('/logout', (req, res) => {
  req.logout()
  res.send({logout: true})
})

router.get('/whoami', (req, res) => {
  if (req.user) {
    res.status(200).json(req.user)
  } else {
    res.status(500).json({ auth: false })
  }
})

module.exports = router