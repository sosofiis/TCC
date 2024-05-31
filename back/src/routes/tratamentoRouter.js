const { Router } = require('express');
const router = Router();

const { storeTratamento } = require('../controller/tratamentoController');

router.post('/store/tratamento', storeTratamento);

module.exports = router;