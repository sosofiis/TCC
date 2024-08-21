const { Router } = require('express');
const router = Router();

const { storeSintomas, getSintomas, deleteSintomas } = require('../controller/sintomasController');

router.post('/store/sintomas', storeSintomas);
router.post('/get/sintomas', getSintomas);
router.post('/delete/sintomas', deleteSintomas);

module.exports = router;