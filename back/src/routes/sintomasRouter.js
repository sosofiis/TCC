const { Router } = require('express');
const router = Router();

const { storeSintomas } = require('../controller/sintomasController');

router.post('/store/sintomas', storeSintomas);

module.exports = router;