const express = require('express');
const adminControl = require('../../controllers/admin/admin');

const router = express.Router();

router.get('/getCategory', adminControl.getCategory);

router.get("/getProducts", adminControl.getProducts );

router.get('/getProduct/:id', adminControl.getProduct);

router.post('/postProduct', adminControl.postProduct);

router.post('/updateProduct', adminControl.updateProduct);

router.delete('/deleteProduct/:id', adminControl.deleteProduct);


module.exports = router;