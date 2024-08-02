const { Router } = require('express');
const router = Router();

const { storeHumor, getHumor } = require('../controller/humorController');

router.post('/store/humor', storeHumor);
router.post('/get/humor', getHumor);

module.exports = router;