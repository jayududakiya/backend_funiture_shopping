const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 9000;

app.get('/',(res,req)=>{
    req.send('Welcome To Express Js Furniture-Shopping-App');
});

app.listen(port,async (req,res)=>{
    try {
        await mongoose.connect(process.env.mongoDb_Url).then(()=>{
            console.log('mongoDB is Connected SussesFully...');    
        }).catch((error)=>{console.log('error',error)})
        console.log(`Server Is Started At This Port${port}`);
    } catch (error) {
        console.error(error);
        res.state(500).json({message : 'Server Error'});
    }
})