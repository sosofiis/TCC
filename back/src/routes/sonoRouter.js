const { Router } = require('express');
const router = Router();

const { storeSono } = require('../controller/sonoController');

router.post('/store/sono', storeSono);

module.exports = router;