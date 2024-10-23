const Order = require('../model/order.model')
const Cart = require('../model/cart.model')
const orderServices = require('../service/order.service');
const cartServices = require('../service/cart.service');

const cartService = new cartServices();
const orderService = new orderServices();

exports.addNewOrder = async (req,res) => {
    try {
        
        const carts = await cartService.getAllCart({userId : req.user._id,isDeleted : false},"productId");
                
        const orderItem = await carts.map((item)=>({
            productId : item.productId._id,
            quantity : item.quantity,
            price :  item.productId.price,
            totalPrice : item.quantity * item.productId.price, 
        }));

        const amount = orderItem.reduce((total,item)=>(total += item.totalAmount),0);

        const nweOrder = await orderService.createOrders({userId: req.user._id , items : orderItem ,  totalAmount : amount});
        console.log('newOrder', nweOrder);
        
        await cartService.deleteManyCart({userId : req.user._id , isDeleted : false});

        return res.status(201).json({message : 'Order Is add ' , nweOrder});

    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message  : 'Internal Server Error'});        
    }
}

exports.deleteOrder = async (req,res) => {
    try {
        let order = await orderService.getOrder({ userId : req.user._id , isDeleted : false });        
        if(order.length === 0) return res.status(404).json({message : 'order Is Not Found...'});
        order = await orderService.updateOrder(order._id,{isDeleted : true });
        return res.status(200).json({message:'order Was Deleted',order});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message  : 'Internal Server Error'});        
    }
}

exports.showAllOrder = async (req,res) => {
    try {
        let orders = await Order.find({userId : req.user._id, isDeleted : false});
        if(orders.length === 0) return res.status(404).json({message : 'orders Not Found'});
        return res.status(200).json({orders});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message  : 'Internal Server Error'});        
    }
}