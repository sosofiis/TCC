const { Router } = require('express');
const router = Router();

const { storeTratamento, getTratamento, deleteTratamento } = require('../controller/tratamentoController');

router.post('/store/tratamento', storeTratamento);
router.post('/get/tratamento', getTratamento);
router.post('/delete/tratamento', deleteTratamento);

module.exports = router;