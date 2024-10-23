const  mongoose  = require('mongoose');

const favoriteSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required: true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required: true
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
},{
    versionKey : false,
    timestamps: true
});



module.exports = mongoose.model('favorites',favoriteSchema);