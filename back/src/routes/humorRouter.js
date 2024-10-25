const { Router } = require('express');
const router = Router();

const { storeHumor, getHumor, deleteHumor } = require('../controller/humorController');

/**
 * @swagger
 * /store/humor:
 *  post:
 *      summary: Guarda os humores registrados
 *      responses:
 *          200:
 *              description: Registrou os humores com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/humor', storeHumor);

/**
 * @swagger
 * /get/humor:
 *  post:
 *      summary: Busca os humores registrados no banco
 *      responses:
 *          200:
 *              description: Mostra os humores registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/get/humor', getHumor);

/**
 * @swagger
 * /delete/humor:
 *  post:
 *      summary: Deleta os humores registrados
 *      responses:
 *          200:
 *              description: Deleta os humores registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/delete/humor', deleteHumor);

module.exports = router;