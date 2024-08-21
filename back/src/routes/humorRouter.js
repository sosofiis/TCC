const { Router } = require('express');
const router = Router();

const { storeHumor, getHumor, deleteHumor } = require('../controller/humorController');

router.post('/store/humor', storeHumor);
router.post('/get/humor', getHumor);
router.post('/delete/humor', deleteHumor);

module.exports = router;