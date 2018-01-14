const sequelize =  require('./setupSequelize')()
const models = require('./models/index')


sequelize.drop()
models.setup()