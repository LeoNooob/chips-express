// login.js文件
var express = require('express');
const Account = require('../models/accounts.js');
var router = express.Router();
var settoken = require('../public/javascripts/token_vertify.js');

// 生成token
router.post('/', function(req, res, next) {
    let _body = req.body
    Account.findOne({username: _body.username, password: _body.password}, function(err, doc) {
        if (doc !== null) {
            settoken.setToken(_body.username,_body.username).then((data)=>{
                return res.json({ token: data });
            })
        } else {
            return res.json({ token: null, result: '登陆失败'})
        }
        return next();
    })
});

module.exports = router;
