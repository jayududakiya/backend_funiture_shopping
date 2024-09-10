// Register User , Update User , Change Password , Delete User  , find User , login User 
const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const saltOrRounds = 10;

class userServices  {
    async addNewUser (body) {
        const hashPassword = bcrypt.hashSync(body.password,saltOrRounds)
        return await User.create({...body, password : hashPassword});
    };
    async findUser (body) {
        return await User.findOne(body);
    };
    async updateUser (id,updateBody) {
        return await User.findByIdAndUpdate(id,{$set : {updateBody}} , {new : true});
    }
};

module.exports = userServices;