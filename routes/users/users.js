const express = require('express');
const usersControl = require('../../controllers/users/users');

const router = express.Router();

router.get('/login', usersControl);

module.exports = router;