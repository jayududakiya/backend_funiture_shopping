const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    "userId":{
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    "productId":{
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'products'
    },
    "rating":{
        type : Number,
        min : 1,
        max : 5
    },
    "description":{
        type : String,
    }
},{
  versionKey : false,
  timestamps: true
});