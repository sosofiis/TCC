const { Router } = require('express');
const router = Router();

const { storeHumor } = require('../controller/humorController');

router.post('/store/humor', storeHumor);

module.exports = router;