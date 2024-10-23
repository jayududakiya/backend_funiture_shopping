const favoriteServices = require('../service/favorite.service');
const productServices = require('../service/products.service');
const cartServices = require('../service/cart.service');
const favoriteService = new favoriteServices();
const productService = new productServices();
const cartService = new cartServices();

exports.addToFavorites  = async (req,res) => {
    try {
        let favorite = await favoriteService.findFavorite({ userId : req.user._id , productId : req.body.productId , isDeleted : false });
        if(favorite) return res.status(400).json({message  : 'favorites Item is already Exists'});
        favorite = await favoriteService.createFavorite({...req.body,userId : req.user._id});
        return res.status(201).json({message  : 'products add To Favorites' , favorite});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message : 'Internal Server Error'})
    }
}


exports.deleteFavorites  = async (req,res) => {
    try {
        const favorite = await favoriteService.findFavorite({ userId : req.user._id , productId : req.body.productId , isDeleted : false });
        if(!favorite) return res.status(404).json({message  : 'favorites Item is Not Found'});
        await favoriteService.deleteFavorite(favorite._id);
        return res.status(200).json({message  : 'favorites Item is Deleted',favorite});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message : 'Internal Server Error'})
    }
}


exports.moveToCart = async (req,res) => {
    try {
        const productIds = req.body.productId;
        console.log('carts',productIds);
        const findCarts = await cartService.getAllCart({ userId : req.user._id , productId : {$in : productIds}, isDeleted : false});
        const findProduct = await productService.getAllProduct({_id : {$in : productIds } , isDeleted : false});
        console.log("findCarts" ,findCarts);
        console.log("findProduct" ,findProduct);        
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message : 'Internal Server Error'})
    }
}

exports.showFavorites  = async (req,res) => {
    try {
        const favorite = await favoriteService.showAllFavorite({ userId : req.user._id,isDeleted : false });
        if(favorite.length === 0) return res.status(404).json({message  : 'favorites Item is Not Found'});
        return res.status(200).json({favorite});
    } catch (error) {
        console.log('Error',error);
        res.status(500).json({message : 'Internal Server Error'})
    }
}

