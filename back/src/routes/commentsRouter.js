const router = require('express').Router();

const { storeComment, getComment, deleteCommentById } = require('../controller/commentsController');

/**
 * @swagger
 * /store/comment:
 *  store:
 *      summary: Guarda o comentário feito
 *      responses:
 *          200:
 *              description: Registrou no banco o comentário feito com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/comment', storeComment);

/**
 * @swagger
 * /get/comment:
 *  store:
 *      summary: Busca os comentários registrados no banco
 *      responses:
 *          200:
 *              description: Mostra os comentários registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.get('/get/comment/:id_post', getComment)

router.delete('/delete/comment/:id', deleteCommentById)

module.exports = router;