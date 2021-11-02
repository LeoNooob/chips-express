const mongodb = require('mongoose')
const config = require('../../config')

var db = config.db.mongodb


mongodb.connect(`mongodb://${db.db_host}:${db.db_port}/${db.db_name}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

mongodb.connection.once('open', () => {
    console.log('数据库连接成功...')
})
mongodb.connection.once('close', () => {
    console.log('数据库断开...')
})


module.exports = mongodb
