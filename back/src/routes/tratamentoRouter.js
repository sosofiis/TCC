const { Router } = require('express');
const router = Router();

const { storeTratamento, getTratamento } = require('../controller/tratamentoController');

router.post('/store/tratamento', storeTratamento);
router.post('/get/tratamento', getTratamento);

module.exports = router;