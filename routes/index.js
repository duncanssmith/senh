var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('000_service', { title: 'Senh: Our service' });
});

/* GET overview page. */
router.get('/Overview', function(req, res, next) {
  res.render('010_overview', { title: 'Senh: Overview of dietetics' });
});

/* GET overview page. */
router.get('/Consultation', function(req, res, next) {
  res.render('011_consultation', { title: 'Senh: Consultation' });
});

/* GET overview page. */
router.get('/OtherServices', function(req, res, next) {
  res.render('012_services', { title: 'Senh: Other services' });
});

/* GET overview page. */
router.get('/Packages', function(req, res, next) {
  res.render('013_packages', { title: 'Senh: Packages' });
});

/* GET overview page. */
router.get('/YourHealth', function(req, res, next) {
  res.render('001_health', { title: 'Senh: Your health' });
});

/* GET overview page. */
router.get('/Diabetes', function(req, res, next) {
  res.render('100_diabetes', { title: 'Senh: Diabetes' });
});

/* GET overview page. */
router.get('/HeartHealth', function(req, res, next) {
  res.render('101_heart', { title: 'Senh: Heart health' });
});

/* GET overview page. */
router.get('/IBS', function(req, res, next) {
  res.render('102_ibs', { title: 'Senh: Irritable bowel syndrome - IBS' });
});

/* GET overview page. */
router.get('/MineralsVitamins', function(req, res, next) {
  res.render('103_vitamins', { title: 'Senh: Minerals and vitamins ' });
});

/* GET overview page. */
router.get('/Allergies', function(req, res, next) {
  res.render('104_allergies', { title: 'Senh: Food intolerance and allergies' });
});

/* GET overview page. */
router.get('/WeightLoss', function(req, res, next) {
  res.render('105_weight', { title: 'Senh: Weight Loss' });
});

/* GET overview page. */
router.get('/Families', function(req, res, next) {
  res.render('106_families', { title: 'Senh: Families' });
});

/* GET overview page. */
router.get('/VeganVegetarian', function(req, res, next) {
  res.render('107_vegetarian', { title: 'Senh: Vegetetarian and Vegan' });
});

/* GET overview page. */
router.get('/Cancer', function(req, res, next) {
  res.render('108_cancer', { title: 'Senh: Cancer' });
});

/* GET overview page. */
router.get('/Coeliac', function(req, res, next) {
  res.render('109_coeliac', { title: 'Senh: Coeliac' });
});

/* GET overview page. */
router.get('/PCOS', function(req, res, next) {
  res.render('110_pcos', { title: 'Senh: PCOS' });
});

/* GET overview page. */
router.get('/NutritionForTheElderly', function(req, res, next) {
  res.render('111_elderly', { title: 'Senh: Elderly dietary needs' });
});

/* GET overview page. */
router.get('/Vitality', function(req, res, next) {
  res.render('112_vitality', { title: 'Senh: Vitality' });
});

/* GET consultation page. */
router.get('/YourOrganisation', function(req, res, next) {
  res.render('002_organisation', { title: 'Senh: Your organisation' });
});

/* GET consultation page. */
router.get('/About', function(req, res, next) {
  res.render('003_about', { title: 'Senh: About' });
});

/* GET consultation page. */
router.get('/Contact', function(req, res, next) {
  res.render('004_contact', { title: 'Senh: Contact' });
});

module.exports = router;
