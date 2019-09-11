
const path=require('path');
const express=require('express');
const router=express.Router();

const rootDir=require('../helper/path');

const adminData=require('./admin');

const productController=require('../controllers/products');

router.get('/',productController.getProducts);


module.exports=router;
