const router = require('express').Router();
const getFirsController = require('../controllers/avr.controller');

//TODO: refactor code - rename "first controller" to "avr_rus"

router.get('/avr_rus_print', getFirsController);

module.exports = router;
