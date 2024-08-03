const { Router } = require('express');
const router = Router();

const { storeSintomas, getSintomas } = require('../controller/sintomasController');

router.post('/store/sintomas', storeSintomas);
router.post('/get/sintomas', getSintomas);

module.exports = router;