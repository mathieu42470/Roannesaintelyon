const express = require('express');
const router = express.Router();

const contUser = require('../controllers/users');

router.post('/signup', contUser.signup);
router.post('/login', contUser.login);

module.exports = router;