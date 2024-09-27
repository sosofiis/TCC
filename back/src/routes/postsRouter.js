const router = require('express').Router();
// const upload = require('../config/multer');

const {storePost, getPost, getPostById} = require('../controller/postsController')

router.post('/store/post', storePost);
router.get('/get/post', getPost)
router.get('/get/post/detalhes/:id', getPostById)

module.exports = router;