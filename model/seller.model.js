const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({ 
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phoneNo : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    profileImg : {
        type : String
    },
    verifyCode : {
        type :Number,
    },
    address : {
        type : String,
        require : true
    }
});


module.exports = mongoose.model('sellers',sellerSchema);