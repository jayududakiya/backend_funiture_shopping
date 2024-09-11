const productServices = require('../service/products.service');

const productService = new productServices();

exports.CreateProduct = async (req,res)  => {
    try {
        const {sku} = req.body;
        let product = await productService.getOneProduct({sku : sku});
        if(product) return res.status(400).json({message : "product was already exists....",skuId : product.sku}) 
        product = await productService.addNewProduct(req.body);
        return res.status(201).json({message :"product Was Created....",product});
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({message : "Internal Server Error"});
    }
}


exports.GetAllProduct = async (req,res) => {
    try {
        const products = await productService.getAllProduct({isDeleted : false});
        if(products.length === 0) return res.status(404).json({message:"products was not Found......"})
        res.status(200).json(products)
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({message : "Internal Server Error"});
    }
}


exports.FindProduct = async (req,res) => { 
    try {
        const {productId} = req.query;
        const product = await productService.getOneProduct({_id : productId , isDeleted : false});
        if(!product) return res.status(404).json({message : "products not Fount productID dose not match......"}) // bad request
        return res.status(200).json(product)
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({message : "Internal Server Error"});
    }
}
exports.UpdateProduct = async (req,res) => {
    try {
        const {productId} = req.query;
        let product = await productService.getOneProduct({_id : productId , isDeleted : false});
        if(!product) return res.status(404).json({message : "products Was Not Found....."});
        product = await productService.updateOneProduct(productId,req.body);
        return res.status(202).json({message:"Products Was Update..",product})
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({message : "Internal Server Error"});   
    }
}

exports.DeleteProductSoft = async (req,res) => {
    try {
        const {productId} = req.query; 
        let product = await productService.getOneProduct({_id : productId , isDeleted : false});
        if(!product) return res.status(404).json({message : "product Was Not Found...."})
        product = await productService.updateOneProduct(productId,{isDeleted:true});
        return res.status(200).json({message:"product Was Deleted.....",product})
    } catch (error) {
        console.log("Error==>",error);
        res.status(500).json({message : "Internal Server Error"})
    }
};
