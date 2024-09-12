const express = require("express");

const productsRoutes = express.Router();

const { CreateProduct , FindProduct , GetAllProduct, UpdateProduct, DeleteProductSoft } = require("../controller/products.controller");

// const { upload } = require('../helper/uploadImage')

productsRoutes.get("/",GetAllProduct); // - [Done]

productsRoutes.get("/-q",FindProduct); // - [Done]  // -q for find product base on sku field

productsRoutes.post("/",CreateProduct); // - [Done]

productsRoutes.put("/",UpdateProduct); // - [Done]

productsRoutes.put("/delete",DeleteProductSoft); // - [Done]

module.exports = productsRoutes;
