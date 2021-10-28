const express = require('express');
const coreControl = require('../../controllers/core/login');

const router = express.Router();

router.use("/login", coreControl );

module.exports = router;