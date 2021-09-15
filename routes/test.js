var express = require('express');
var faker = require('faker')

// var connection = require('../public/javascripts/mongodb')

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  setTimeout(() => {
    res.json({ user: 'mybad', prime: true, date: new Date(), random: Math.random() * 1000 });
  }, 120);
});

router.get('/faker', function (req, res, next) {
  var i = 0
  var result = []
  let count = req.query.count || 10
  while (i < count) {
    //faker案例
    result.push({ name: faker.name.findName(), country: faker.address.country(), phone: faker.phone.phoneNumber(), email: faker.internet.email(), company: faker.company.companyName(), account: faker.finance.account() })
    i++;
  }
  res.json(result)
})

module.exports = router;
