const router = require('express').Router();
const controller = require('../controllers/pdfmerger.controller');
router.get('/blank_zakazov', controller);

module.exports = router;
