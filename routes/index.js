var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('p0_ourService', { title: 'Senh: Our service' });
});

/* GET overview page. */
router.get('/p00_overview', function(req, res, next) {
  res.render('p00_overview', { title: 'Senh: Overview of dietetics' });
});

/* GET overview page. */
router.get('/p01_consultation', function(req, res, next) {
  res.render('p01_consultation', { title: 'Senh: Consultation' });
});

/* GET overview page. */
router.get('/p02_otherServices', function(req, res, next) {
  res.render('p02_otherServices', { title: 'Senh: Other services' });
});

/* GET overview page. */
router.get('/p03_packages', function(req, res, next) {
  res.render('p03_packages', { title: 'Senh: Packages' });
});

/* GET overview page. */
router.get('/p1_yourHealth', function(req, res, next) {
  res.render('p1_yourHealth', { title: 'Senh: Your health' });
});

/* GET overview page. */
router.get('/p10_diabetes', function(req, res, next) {
  res.render('p10_diabetes', { title: 'Senh: Diabetes' });
});

/* GET overview page. */
router.get('/p11_heartHealth', function(req, res, next) {
  res.render('p11_heartHealth', { title: 'Senh: Heart health' });
});

/* GET overview page. */
router.get('/p12_IBS', function(req, res, next) {
  res.render('p12_IBS', { title: 'Senh: Irritable bowel syndrome - IBS' });
});

/* GET overview page. */
router.get('/p13_mineralVitamins', function(req, res, next) {
  res.render('p13_mineralVitamins', { title: 'Senh: Minerals and vitamins ' });
});

/* GET overview page. */
router.get('/p14_allergy', function(req, res, next) {
  res.render('p14_allergy', { title: 'Senh: Food intolerance and allergies' });
});

/* GET overview page. */
router.get('/p15_weightLoss', function(req, res, next) {
  res.render('p15_weightLoss', { title: 'Senh: Weight Loss' });
});

/* GET overview page. */
router.get('/p16_families', function(req, res, next) {
  res.render('p16_families', { title: 'Senh: Families' });
});

/* GET overview page. */
router.get('/p17_veg', function(req, res, next) {
  res.render('p17_veg', { title: 'Senh: Vegetetarian and Vegan' });
});

/* GET overview page. */
router.get('/p18_cancer', function(req, res, next) {
  res.render('p18_cancer', { title: 'Senh: Cancer' });
});

/* GET overview page. */
router.get('/p19_coeliac', function(req, res, next) {
  res.render('p19_coeliac', { title: 'Senh: Coeliac' });
});

/* GET overview page. */
router.get('/p1A_PCOS', function(req, res, next) {
  res.render('p1A_PCOS', { title: 'Senh: PCOS' });
});

/* GET overview page. */
router.get('/p1B_elderly', function(req, res, next) {
  res.render('p1B_elderly', { title: 'Senh: Elderly dietary needs' });
});

/* GET overview page. */
router.get('/p1C_vitality', function(req, res, next) {
  res.render('p1C_vitality', { title: 'Senh: Vitality' });
});

/* GET consultation page. */
router.get('/p2_yourOrganisation', function(req, res, next) {
  res.render('p2_yourOrganisation', { title: 'Senh: Your organisation' });
});

/* GET consultation page. */
router.get('/p3_about', function(req, res, next) {
  res.render('p3_about', { title: 'Senh: About' });
});

/* GET consultation page. */
router.get('/p4_contact', function(req, res, next) {
  res.render('p4_contact', { title: 'Senh: Contact' });
});

/* GET consultation page. */
router.get('/p5_enquiry', function(req, res, next) {
  res.render('p5_enquiry', { title: 'Senh: Enquiry' });
});

module.exports = router;
