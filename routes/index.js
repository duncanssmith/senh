var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PalmC', youAreUsingJade: true, imagePath: '/images/esperanza_spalding.jpg', image: 'esperanza_spalding.jpg' });
});

/* GET overview page. */
router.get('/p1_overview', function(req, res, next) {
  res.render('p1_overview', { title: 'PalmC Overview', youAreUsingJade: true, imagePath: '/images/esperanza_spalding.jpg' });
});

/* GET consultation page. */
router.get('/p2_consultation', function(req, res, next) {
  res.render('p2_consultation', { title: 'PalmC Consultation', youAreUsingJade: true, imagePath: '/images/esperanza_spalding.jpg' });
});

/* GET consultation page. */
router.get('/p3_otherServices', function(req, res, next) {
  res.render('p3_otherServices', { title: 'PalmC Other services' });
});

/* GET consultation page. */
router.get('/p4_packages', function(req, res, next) {
  res.render('p4_packages', { title: 'PalmC Packages' });
});

module.exports = router;
