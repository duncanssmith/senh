var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('p0_ourService', { title: 'PalmC Our service' });
});

/* GET overview page. */
router.get('/p00_overview', function(req, res, next) {
  res.render('p00_overview', { title: 'PalmC Overview of dietetics' });
});

/* GET overview page. */
router.get('/p01_consultation', function(req, res, next) {
  res.render('p01_consultation', { title: 'PalmC Consultation' });
});

/* GET overview page. */
router.get('/p02_otherServices', function(req, res, next) {
  res.render('p02_otherServices', { title: 'PalmC Other services' });
});

/* GET overview page. */
router.get('/p03_packages', function(req, res, next) {
  res.render('p03_packages', { title: 'PalmC Packages' });
});

/* GET overview page. */
router.get('/p1_yourHealth', function(req, res, next) {
  res.render('p1_yourHealth', { title: 'PalmC Your health' });
});

/* GET overview page. */
router.get('/p10_diabetes', function(req, res, next) {
  res.render('p10_diabetes', { title: 'PalmC Diabetes' });
});

/* GET overview page. */
router.get('/p11_heartHealth', function(req, res, next) {
  res.render('p11_heartHealth', { title: 'PalmC Heart health' });
});

/* GET overview page. */
router.get('/p12_IBS', function(req, res, next) {
  res.render('p12_IBS', { title: 'PalmC Irritable bowel syndrome - IBS' });
});

/* GET overview page. */
router.get('/p13_mineralVitamins', function(req, res, next) {
  res.render('p13_mineralVitamins', { title: 'PalmC Minerals and vitamins ' });
});

/* GET overview page. */
router.get('/p14_allergy', function(req, res, next) {
  res.render('p14_allergy', { title: 'PalmC Food intolerance and allergies' });
});

/* GET overview page. */
router.get('/p15_weightLoss', function(req, res, next) {
  res.render('p15_weightLoss', { title: 'PalmC Weight Loss' });
});

/* GET overview page. */
router.get('/p16_families', function(req, res, next) {
  res.render('p16_families', { title: 'PalmC Families' });
});

/* GET overview page. */
router.get('/p17_veg', function(req, res, next) {
  res.render('p17_veg', { title: 'PalmC Vegetetarian and Vegan' });
});

/* GET overview page. */
router.get('/p18_cancer', function(req, res, next) {
  res.render('p18_cancer', { title: 'PalmC Cancer' });
});

/* GET overview page. */
router.get('/p19_coeliac', function(req, res, next) {
  res.render('p19_coeliac', { title: 'PalmC Coeliac' });
});

/* GET overview page. */
router.get('/p1A_PCOS', function(req, res, next) {
  res.render('p1A_PCOS', { title: 'PalmC PCOS' });
});

/* GET overview page. */
router.get('/p1B_elderly', function(req, res, next) {
  res.render('p1B_elderly', { title: 'PalmC Elderly dietary needs' });
});

/* GET overview page. */
router.get('/p1C_vitality', function(req, res, next) {
  res.render('p1C_vitality', { title: 'PalmC Vitality' });
});

/* GET consultation page. */
router.get('/p2_yourOrganisation', function(req, res, next) {
  res.render('p2_yourOrganisation', { title: 'PalmC Your organisation' });
});

/* GET consultation page. */
router.get('/p3_about', function(req, res, next) {
  res.render('p3_about', { title: 'PalmC About' });
});

/* GET consultation page. */
router.get('/p4_contact', function(req, res, next) {
  res.render('p4_contact', { title: 'PalmC Contact' });
});

/* GET consultation page. */
router.get('/p5_enquiry', function(req, res, next) {
  res.render('p5_enquiry', { title: 'PalmC Enquiry' });
});

module.exports = router;
