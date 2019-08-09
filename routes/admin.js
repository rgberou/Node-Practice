const express=require('express');
const path=require('path');
const router=express.Router();

const rootDir=require('../helper/path');

const product=[];

router.get('/add-product',(req,res,next)=>{
	console.log("In another middleware!");
	//res.sendFile(path.join(rootDir,'views','add-product.html'));

	res.render('add-product');
});

router.post('/add-product',(req,res,next)=>{
	console.log(req.body);
	console.log(req.body.title);
	product.push({title:req.body.title});
	res.redirect('/');	
});


//module.exports=router;

exports.routes=router;
exports.products=product;