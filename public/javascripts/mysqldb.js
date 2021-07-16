const mysql = require('mysql')
const config = {
    // host: '',
    // port: 3306,
    // user: '',
    // password: '',
    // database: ''
}

module.exports = mysql.createConnection(config)