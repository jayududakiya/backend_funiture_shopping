const Product = require('../model/product.model');

class productServices {
    async addNewProduct (body) {
        return await Product.create(body);
    };
    
    async getOneProduct (body) {
        return await Product.findOne(body);
    };

    async getAllProduct (body) {
        return await Product.find(body);
    };

    async updateOneProduct (id,updateBody) {
        return await Product.findByIdAndUpdate(id,{$set:updateBody},{new : true});
    };
};


module.exports = productServices;