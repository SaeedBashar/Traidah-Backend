const express = require('express');
const adminControl = require('../../controllers/admin/admin');

const router = express.Router();

router.get('/getProduct/:id', adminControl.getProduct);

router.get("/getProducts", adminControl.getProducts );

router.get('/getCategory', adminControl.getCategory);

router.post('/postProduct', adminControl.postProduct);

router.post('/updateProduct', adminControl.updateProduct);


module.exports = router;