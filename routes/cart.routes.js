const express = require('express');
const { verifyToken } = require('../helper/verifyToken');
const { addToCart , deleteToCart , updateToCart , getAllCart } = require('../controller/cart.controller');

const CartRoutes = express.Router();

CartRoutes.get('/',verifyToken,getAllCart);  // [Done]

// NOTE : (call this API as AddToCart it's add default  quantity 1 but as call again this api but you don't pass  quantity filed then it IncreaseBy quantity by 1 but if you pass the quantity fild with value the it's addition with rest quantity number  )
CartRoutes.post('/',verifyToken,addToCart); // - [Done] 

CartRoutes.post('/updateCart',verifyToken,updateToCart);  // - [Done]

CartRoutes.post('/deleteCart',verifyToken,deleteToCart); //  - [Done]

module.exports = CartRoutes;