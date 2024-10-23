const express = require('express');
const favoriteRoutes = express.Router();

// '/api/favorite'
const { verifyToken } = require('../helper/verifyToken');
const {  addToFavorites  , deleteFavorites , showFavorites , moveToCart} = require('../controller/favorite.controller')

favoriteRoutes.get('/',verifyToken,showFavorites); // [DONE]
favoriteRoutes.post('/',verifyToken,addToFavorites); // [DONE]
favoriteRoutes.post('/toCart',verifyToken,moveToCart); // [DONE]
favoriteRoutes.post('/delete',verifyToken,deleteFavorites); // [DONE]



module.exports = favoriteRoutes;