const sequelize = require('../setupSequelize')()
const Sequelize = require('sequelize')


 const pollModel = sequelize.define('poll', {
  title: Sequelize.STRING
})

module.exports = pollModel