const sequelize = require('../setupSequelize')()
const Sequelize = require('sequelize')


 const pollModel = sequelize.define('poll', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = pollModel