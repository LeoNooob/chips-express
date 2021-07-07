const mysql = require('mysql')
const config = {
    host: '10.99.36.91',
    port: 3306,
    user: 'nextcloud',
    password: 'vteit123456',
    database: 'nextcloud'
}

module.exports = mysql.createConnection(config)