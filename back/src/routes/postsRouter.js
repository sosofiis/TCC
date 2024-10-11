const router = require('express').Router();
// const upload = require('../config/multer');

const {storePost, getPost, getPostById, deletePostById} = require('../controller/postsController')

/**
 * @swagger
 * /store/post:
 *  store:
 *      summary: Guarda o post feito
 *      responses:
 *          200:
 *              description: Registrou no banco o post feito com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/post', storePost);

/**
 * @swagger
 * /get/post:
 *  store:
 *      summary: Busca os posts registrados no banco
 *      responses:
 *          200:
 *              description: Mostra os posts registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.get('/get/post', getPost)

/**
 * @swagger
 * /get/post/detalhes/:id:
 *  store:
 *      summary: Busca os post feito no banco e mostra seus detalhes a partir do ID dele
 *      responses:
 *          200:
 *              description: Mostra os detalhes do post
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.get('/get/post/detalhes/:id', getPostById)

router.delete('/delete/post/:id', deletePostById)
module.exports = router;