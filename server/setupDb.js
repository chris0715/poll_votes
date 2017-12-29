const Sequelize =  require('sequelize')
const sequelize = require('./setupSequelize')()

sequelize.drop()

 const userModel = sequelize.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

 const pollModel = sequelize.define('poll', {
  title: Sequelize.STRING
})

pollModel.belongsTo(userModel)

function setup() {
  sequelize.drop()
  .then(_ => {
    sequelize.sync()
  })
}
module.exports = {
  userModel,
  pollModel,
  setup
}
