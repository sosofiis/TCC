const { Router } = require('express');
const router = Router();

const { storeSintomas, getSintomas, deleteSintomas } = require('../controller/sintomasController');


/**
 * @swagger
 * /store/sintomas:
 *  post:
 *      summary: Guarda os sintomas registrados
 *      responses:
 *          200:
 *              description: Registrou os sintomas com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/store/sintomas', storeSintomas);

/**
 * @swagger
 * /get/sintomas:
 *  post:
 *      summary: Busca os sintomas registrados no banco
 *      responses:
 *          200:
 *              description: Mostra os sintomas registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/get/sintomas', getSintomas);

/**
 * @swagger
 * /delete/sintomas:
 *  post:
 *      summary: Deleta os sintomas registrados
 *      responses:
 *          200:
 *              description: Deleta os sintomas registrados com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/delete/sintomas', deleteSintomas);

module.exports = router;