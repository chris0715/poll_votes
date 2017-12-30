const Sequelize = require('sequelize')
const config = require('../config')

let sequelize = null

module.exports = () => {
  if (!sequelize) {
    return new Sequelize(config.dbConfig)
  }
  return sequelize
}