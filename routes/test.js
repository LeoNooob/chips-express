var express = require('express');
var faker = require('faker')

var connection = require('../public/javascripts/mongodb')

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ user: 'mybad', prime: true, date: new Date() });
});

router.get('/faker', function (req, res, next) {
  var i = 0
  var result = []
  while (i < 1000) {
    //faker案例
    result.push({ name: faker.name.findName(), country: faker.address.country(), phone: faker.phone.phoneNumber(), email: faker.internet.email(), company: faker.company.companyName(), account: faker.finance.account() })
    i++;
  }
  res.json(result)
})

router.get('/mongo', (req, res, next) => {

})

module.exports = router;
