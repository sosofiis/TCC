const { Router } = require('express');
const router = Router();

const { storeAtiv_fisica } = require('../controller/ativ_fisicaController');

router.post('/store/ativ_fisica', storeAtiv_fisica);

module.exports = router;