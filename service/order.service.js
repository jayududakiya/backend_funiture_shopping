const Order = require('../model/order.model');

class orderServices {
    async createOrders (body) {
        await Order.create(body);
    };
    async getOrder (body) {
        await Order.findOne(body);
    };

    async updateOrder (id,updateData) {
        await Order.findByIdAndUpdate(id,{$set : updateData},{new :true});
    };
};


module.exports = orderServices;