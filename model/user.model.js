const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {
        type  : String,
        require : true
    },
    email : {
        type  : String,
        require : true,
        unique : true
    },
    password : {
        type  : String,
        require : true,
    },
    profileImage : {
        type  : String,
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
},{
    versionKey: false,
    timestamps : true
});


module.exports = mongoose.model('users',userSchema);