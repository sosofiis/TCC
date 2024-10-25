const { Router } = require('express');
const router = Router();

const { storeTratamento, getTratamento, deleteTratamento } = require('../controller/tratamentoController');

/**
 * @swagger
 * /store/tratamento:
 *  post:
 *      summary: Guarda o tratamento registrado
 *      responses:
 *          200:
 *              description: Registrou o tratamento com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/tratamento', storeTratamento);

/**
 * @swagger
 * /get/tratamento:
 *  post:
 *      summary: Busca os tratamentos registrados no banco
 *      responses:
 *          200:
 *              description: Mostra os tratamentos registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/get/tratamento', getTratamento);

/**
 * @swagger
 * /delete/tratamento:
 *  post:
 *      summary: Deleta os tratamentos registrados
 *      responses:
 *          200:
 *              description: Deleta os tratamentos registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/delete/tratamento', deleteTratamento);

module.exports = router;