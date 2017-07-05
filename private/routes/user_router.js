const express = require('express');
const router = express.Router();
const user_controller = require(`${__dirname}/../controllers/user_controller`);

router.post('/login', user_controller.login);
router.post('/register', user_controller.register);
router.post('/logout', user_controller.logout);

module.exports = router;