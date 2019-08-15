
const path=require('path');
const express=require('express');
const router=express.Router();

const rootDir=require('../helper/path');

const adminData=require('./admin');


router.get('/',(req,res,next)=>{
	//console.log(adminData.products)
	const products=adminData.products;
	res.render('shop',{prods:products,docTitle:"Shop",path:"/"});
	//res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports=router;
