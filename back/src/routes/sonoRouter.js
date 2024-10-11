const { Router } = require('express');
const router = Router();

const { storeSono, getSono, deleteSono } = require('../controller/sonoController');

/**
 * @swagger
 * /store/sono:
 *  store:
 *      summary: Guarda a noite de sono registrada
 *      responses:
 *          200:
 *              description: Registrou a noite de sono com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/sono', storeSono);

/**
 * @swagger
 * /get/humor:
 *  store:
 *      summary: Busca as noites de sono registradas no banco
 *      responses:
 *          200:
 *              description: Mostra as noites de sono registradas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/get/sono', getSono);

/**
 * @swagger
 * /delete/sono:
 *  store:
 *      summary: Deleta as noites de sono registradas
 *      responses:
 *          200:
 *              description: Deleta as noites de sono registradas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/delete/sono', deleteSono);

module.exports = router;