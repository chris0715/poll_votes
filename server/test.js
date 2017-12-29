const Sequelize = require('sequelize')
const setupDb = require('./setupDb')

const dbConfig = {
  host: 'localhost',
  dialect: 'postgres',
  database: 'pollVoting',
  username: 'postgres',
  password: '.infernusk23',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

setupDb()

const sequelize = new Sequelize(dbConfig)
