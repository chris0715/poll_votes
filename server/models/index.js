const UserModel = require('./user')
const PollModel = require('./poll')
const PollOptionsModel = require('./pollOptions')

PollModel.belongsTo(UserModel)
PollOptionsModel.belongsTo(PollModel)

module.exports = {
  UserModel,
  PollModel,
  PollOptionsModel
}