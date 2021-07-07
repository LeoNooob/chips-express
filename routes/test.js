var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user: 'mybad', prime: true, date: new Date()});
});

router.get('/test1', function(req,res,next) {
	res.json({today: new Date()})
});

router.get('/gettable', function(req,res,next) {
  res.json([{ label: '傻逼', value: 'idiot' },{ label: '傻逼', value: 'idiot' },{ label: '傻逼', value: 'idiot' }])
})

module.exports = router;
