const express=require('express');
const path=require('path');
const router=express.Router();

const rootDir=require('../helper/path');


const productController=('../controllers/product');

router.get('/add-product',productController.getAddProduct);

router.post('/add-product',productController.postAddProduct);


//module.exports=router;

/*exports.routes=router;
exports.products=product;*/