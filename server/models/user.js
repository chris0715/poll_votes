const sequelize = require('../setupSequelize')()
const Sequelize = require('sequelize')


 const userModel = sequelize.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

module.exports = userModel