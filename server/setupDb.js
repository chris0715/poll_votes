const Sequelize =  require('sequelize')

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
