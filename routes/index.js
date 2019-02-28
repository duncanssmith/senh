var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('p0_ourService', { title: 'Senh: Our service' });
});

/* GET overview page. */
router.get('/Overview', function(req, res, next) {
  res.render('p00_overview', { title: 'Senh: Overview of dietetics' });
});

/* GET overview page. */
router.get('/Consultation', function(req, res, next) {
  res.render('p01_consultation', { title: 'Senh: Consultation' });
});

/* GET overview page. */
router.get('/OtherServices', function(req, res, next) {
  res.render('p02_otherServices', { title: 'Senh: Other services' });
});

/* GET overview page. */
router.get('/Packages', function(req, res, next) {
  res.render('p03_packages', { title: 'Senh: Packages' });
});

/* GET overview page. */
router.get('/YourHealth', function(req, res, next) {
  res.render('p1_yourHealth', { title: 'Senh: Your health' });
});

/* GET overview page. */
router.get('/Diabetes', function(req, res, next) {
  res.render('p10_diabetes', { title: 'Senh: Diabetes' });
});

/* GET overview page. */
router.get('/HeartHealth', function(req, res, next) {
  res.render('p11_heartHealth', { title: 'Senh: Heart health' });
});

/* GET overview page. */
router.get('/IBS', function(req, res, next) {
  res.render('p12_IBS', { title: 'Senh: Irritable bowel syndrome - IBS' });
});

/* GET overview page. */
router.get('/MineralsVitamins', function(req, res, next) {
  res.render('p13_mineralVitamins', { title: 'Senh: Minerals and vitamins ' });
});

/* GET overview page. */
router.get('/Allergies', function(req, res, next) {
  res.render('p14_allergy', { title: 'Senh: Food intolerance and allergies' });
});

/* GET overview page. */
router.get('/WeightLoss', function(req, res, next) {
  res.render('p15_weightLoss', { title: 'Senh: Weight Loss' });
});

/* GET overview page. */
router.get('/Families', function(req, res, next) {
  res.render('p16_families', { title: 'Senh: Families' });
});

/* GET overview page. */
router.get('/VeganVegetarian', function(req, res, next) {
  res.render('p17_veg', { title: 'Senh: Vegetetarian and Vegan' });
});

/* GET overview page. */
router.get('/Cancer', function(req, res, next) {
  res.render('p18_cancer', { title: 'Senh: Cancer' });
});

/* GET overview page. */
router.get('/Coeliac', function(req, res, next) {
  res.render('p19_coeliac', { title: 'Senh: Coeliac' });
});

/* GET overview page. */
router.get('/PCOS', function(req, res, next) {
  res.render('p1A_PCOS', { title: 'Senh: PCOS' });
});

/* GET overview page. */
router.get('/NutritionForTheElderly', function(req, res, next) {
  res.render('p1B_elderly', { title: 'Senh: Elderly dietary needs' });
});

/* GET overview page. */
router.get('/Vitality', function(req, res, next) {
  res.render('p1C_vitality', { title: 'Senh: Vitality' });
});

/* GET consultation page. */
router.get('/YourOrganisation', function(req, res, next) {
  res.render('p2_yourOrganisation', { title: 'Senh: Your organisation' });
});

/* GET consultation page. */
router.get('/About', function(req, res, next) {
  res.render('p3_about', { title: 'Senh: About' });
});

/* GET consultation page. */
router.get('/Contact', function(req, res, next) {
  res.render('p4_contact', { title: 'Senh: Contact' });
});

/* GET consultation page. */
router.get('/Proto', function(req, res, next) {
  res.render('000_prototype', { title: 'Proto' });
});

module.exports = router;
