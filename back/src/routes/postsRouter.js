const router = require('express').Router();
// const upload = require('../config/multer');

const {storePost, getPost} = require('../controller/postsController')

router.post('/store/post', storePost);
router.get('/get/post', getPost)

module.exports = router;