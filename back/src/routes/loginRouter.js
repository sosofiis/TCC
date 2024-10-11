const router = require('express').Router();

const { loginUser } = require('../controller/loginController')

/**
 * @swagger
 * /login:
 *  store:
 *      summary: Busca um usuário já existente no banco a partir do e-mail
 *      responses:
 *          200:
 *              description: Entra na conta do usuário com sucesso
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 */
router.post('/login', loginUser);

module.exports = router;