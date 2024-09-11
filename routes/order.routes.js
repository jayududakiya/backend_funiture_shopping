const express = require('express');
const orderRoutes = express.Router();
const {  addNewOrder, deleteOrder , showAllOrder } = require('../controller/order.controller');
const { verifyToken } = require('../helper/verifyToken');

orderRoutes.get('/',verifyToken,showAllOrder);
orderRoutes.post('/',verifyToken,addNewOrder); // [done]
orderRoutes.post('/delete',verifyToken,deleteOrder);

module.exports =  orderRoutes;