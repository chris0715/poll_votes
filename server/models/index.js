const UserModel = require('./user')
const PollModel = require('./poll')
const PollOptionsModel = require('./pollOptions')

PollModel.belongsTo(UserModel)
PollOptionsModel.belongsTo(PollModel)
PollModel.hasMany(PollOptionsModel)


async function setup() {
  await UserModel.sync()
  await PollModel.sync()
  await PollOptionsModel.sync()  
} 
module.exports = {
  UserModel,
  PollModel,
  PollOptionsModel,
  setup
}