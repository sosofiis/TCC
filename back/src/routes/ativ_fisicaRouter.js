const { Router } = require('express');
const router = Router();

const { storeAtiv_fisica, getAtiv_fisica, deleteAtiv_fisica } = require('../controller/ativ_fisicaController');

router.post('/store/ativ_fisica', storeAtiv_fisica);
router.post('/get/ativ_fisica', getAtiv_fisica);
router.post('/delete/ativ_fisica', deleteAtiv_fisica);

module.exports = router;