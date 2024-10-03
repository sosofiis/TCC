const router = require('express').Router();

const { storeComment, getComment } = require('../controller/commentsController');

router.post('/store/comment', storeComment);
router.get('/get/comment', getComment)

module.exports = router;