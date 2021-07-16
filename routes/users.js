// users.js文件
var express = require('express');
var router = express.Router();

// 验证token
router.post('/vertify', function(req, res, next) {
    if(req.user){
        return res.json({
            msg:'身份验证成功'
        })
    }else{
        return res.json({
            msg:'未获取到用户信息'
        })
    }
    next();
});

module.exports = router;