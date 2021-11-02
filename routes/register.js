// register.js文件
var express = require('express');
var router = express.Router();
var Accounts = require('../models/accounts')

// 注册用户
router.post('/', function (req, res, next) {
    const _body = req.body
    if (_body.username && _body.password) {
        authUsername(_body.username, function (auth) {
            if (auth) {
                const newAccount = new Accounts({ username: _body.username, password: _body.password, gender: _body.gender, email: _body.email });
                newAccount.save();
                res.json({ result: '注册成功' })
            } else {
                res.json({ result: '注册失败：用户名已存在' })
            }
        })
    } else {
        res.json({ result: '参数不得为空' })
    }
});

router.post('/auth', function (req, res,next) {
    const _body = req.body
    if (_body.username) {
        authUsername(_body.username, function(auth) {
            if (auth) {
                res.json({ success: 1, result: '用户名未占用'})
            } else {
                res.json({ success: 0, result: '用户名已被占用' })
            } 
        })
    } else {
        res.json({ success: 0, result: '缺少username参数' })
    }
})

function authUsername(username, callback) {
    var auth = null
    Accounts.find({ username: username }, function (err, data) {
        auth = !(data.length > 0)
        console.log(auth)
        callback(auth)
    })
}

module.exports = router;
