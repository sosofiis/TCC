const router = require('express').Router();

const { loginUser } = require('../controller/loginController')

router.post('/login', loginUser);

module.exports = router;