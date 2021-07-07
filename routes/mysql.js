var express = require('express');
var router = express.Router();

const connection = require('../public/javascripts/mysqldb')


/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('select * from oc_appconfig', (err, data) => {
        if (err) {
            res.send('query error')
        } else {
            res.send(data)
        }
    })
});

module.exports = router;
