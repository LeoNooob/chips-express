const mongodb = require('mongoose')

mongodb.connect('mongodb://localhost:27017/bk_account', { useNewUrlParser: true })

mongodb.connection.once('open', () => {
    console.log('数据库连接成功...')
})
mongodb.connection.once('close', () => {
    console.log('数据库断开...')
})


module.exports = mongodb