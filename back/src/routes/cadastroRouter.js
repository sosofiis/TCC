const { Router } = require('express');
const router = Router();

const { createUser } = require('../controller/cadastroController');

/**
 * @swagger
 * /create/user:
 *  store:
 *      summary: Cria um usuário no banco de dados
 *      responses:
 *          200:
 *              description: Cria um usuário no banco com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/create/user', createUser);

module.exports = router;