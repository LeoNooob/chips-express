const mongodb = require('mongoose')

mongodb.connect('mongodb://127.0.0.1:49153/test', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

mongodb.connection.once('open', () => {
    console.log('数据库连接成功...')
})
mongodb.connection.once('close', () => {
    console.log('数据库断开...')
})


module.exports = mongodb
