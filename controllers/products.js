
const product=[];

exports.getAddProduct=(req,res,next)=>{
	console.log("In another middleware!");
	//res.sendFile(path.join(rootDir,'views','add-product.html'));

	res.render('add-product',{pageTitle:"Add Product",path:"admin/add-product",activeProduct:true});
}

exports.postAddProduct=(req,res,next)=>{
	console.log(req.body);
	console.log(req.body.title);
	product.push({title:req.body.title});
	res.redirect('/');	
}

exports.getProducts=(req,res,next)=>{
	//console.log(adminData.products)
	res.render('shop',{prods:product,pageTitle:"Shop",path:"/",hasProducts: product.length>0,activeShop:true});
	//res.sendFile(path.join(rootDir,'views','shop.html'));
}