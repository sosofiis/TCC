const { Router } = require('express');
const router = Router();

const { createUser } = require('../controller/cadastroController');

router.post('/create/user', createUser);

module.exports = router;