// login.js文件
var express = require('express');
var router = express.Router();
var settoken = require('../public/javascripts/token_vertify.js');

// 生成token
router.post('/', function(req, res, next) {
    var username = 'slj';
    var userid = "111";
    settoken.setToken(username,userid).then((data)=>{
        return res.json({ token: data });
    })
    return next();
});

module.exports = router;
