const Cart = require('../model/cart.model');

class cartServices {
    async getOneCart (body) {
        return await Cart.findOne(body);
    }
    async getAllCart (body,populateFiled) {
        return await Cart.find(body)
        ?.populate(populateFiled);
    }
    async createCart (body) {
        return await Cart.create(body);
    };

    async updateCart (id,updateBody) {
        return await Cart.findByIdAndUpdate(id,{$set : updateBody } , {new : true})
    };

    async deleteCart (id) {
        return await Cart.deleteOne({_id:id})
    };
};


module.exports = cartServices;