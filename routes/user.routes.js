const express  = require('express');

const userRoutes = express.Router();

const { registerUser , loginUser , showUserProfile , updateProfile , changePassword , deleteUser} = require('../controller/user.controller');

const { verifyToken } = require('../helper/verifyToken');
// const { upload } = require('../helper/imageUpload');
// /api/user => 
userRoutes.post('/',registerUser); // [Done]
userRoutes.post('/login', loginUser); // [Done]
userRoutes.get('/',verifyToken,showUserProfile);  // [Done]
userRoutes.put('/updateUser',verifyToken,updateProfile); // [Done]
userRoutes.put('/changePassword',verifyToken,changePassword); //  [Done]
userRoutes.put('/deleteUser',verifyToken,deleteUser); // [Done]


module.exports = userRoutes;
