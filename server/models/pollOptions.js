const sequelize = require('../setupSequelize')()
const Sequelize = require('sequelize')



const pollOptionsModel = sequelize.define('pollOptions', {
  name: {
    type: Sequelize.STRING, 
    allowNull: false,
    unique: true
  }
})

module.exports = pollOptionsModel