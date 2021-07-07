var express = require('express');
var faker = require('faker')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({user: 'mybad', prime: true, date: new Date()});
});

router.get('/test1', function(req,res,next) {
	res.json({today: new Date()})
});

router.get('/gettable', function(req,res,next) {
  var i = 0
  var result = []
  while(i < 10000) {
    result.push({ name: faker.name.findName(), country: faker.address.country(), phone: faker.phone.phoneNumber(), email: faker.internet.email(), company: faker.company.companyName(), account: faker.finance.account() })
    i++;
  }
  res.json(result)
})

module.exports = router;
