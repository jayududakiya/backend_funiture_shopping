const express  = require('express');

const userRoutes = express.Router();

const { registerUser , loginUser , showUserProfile , updateProfile , changePassword , deleteUser} = require('../controller/user.controller');

const { verifyToken } = require('../helper/verifyToken');
const { upload } = require('../helper/imageUpload');
// /api/user => 
userRoutes.post('/',registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/',verifyToken,showUserProfile);
userRoutes.put('/updateUser',verifyToken,upload.single('profileImage'),updateProfile);
userRoutes.put('/changePassword',verifyToken,changePassword);
userRoutes.put('/deleteUser',verifyToken,deleteUser);


module.exports = userRoutes;
