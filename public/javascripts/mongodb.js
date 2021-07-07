const mongodb = require('mongoose')
const config = {
    url: 'localhost',
    db: 'myDB'
}

module.exports = mongodb.connect('mongodb://' + url + '/' + db)
