const express = require('express');
const adminControl = require('../../controllers/admin/admin');

const router = express.Router();

router.use("/", adminControl );

module.exports = router;