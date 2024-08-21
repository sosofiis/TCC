const { Router } = require('express');
const router = Router();

const { storeSono, getSono, deleteSono } = require('../controller/sonoController');

router.post('/store/sono', storeSono);
router.post('/get/sono', getSono);
router.post('/delete/sono', deleteSono);

module.exports = router;