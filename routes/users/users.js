const express = require('express');

const usersControl = require('../../controllers/users/users');

const router = express.Router();

router.post('/addToCart/:id', usersControl.addToCart);

router.post('/removeFromCart/:id', usersControl.removeFromCart);

router.get('/getCart/:id', usersControl.getCart);

router.post('/createCart', usersControl.createCart);

module.exports = router;