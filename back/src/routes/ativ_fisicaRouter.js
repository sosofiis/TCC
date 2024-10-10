const { Router } = require('express');
const router = Router();

const { storeAtiv_fisica, getAtiv_fisica, deleteAtiv_fisica } = require('../controller/ativ_fisicaController');

/**
 * @swagger
 * /store/ativ_fisica
 *  store:
 *      summary: Guarda as atividades físicas registradas
 *      responses:
 *          200:
 *              description: Registrou as atividades físicas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/ativ_fisica', storeAtiv_fisica);

/**
 * @swagger
 * /get/ativ_fisica
 *  store:
 *      summary: Busca as atividades físicas registradas no banco
 *      responses:
 *          200:
 *              description: Mostra as atividades físicas registradas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/get/ativ_fisica', getAtiv_fisica);

/**
 * @swagger
 * /delete/ativ_fisica
 *  store:
 *      summary: Deleta as atividades físicas registradas
 *      responses:
 *          200:
 *              description: Deleta as atividades físicas registradas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/delete/ativ_fisica', deleteAtiv_fisica);

module.exports = router;