const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop')

app.set('view engine','pug');
//adding body parser
app.use(bodyParser.urlencoded({extended:false}));app.use(express.static(path.join(__dirname,'public')));
//app.use('/admin',adminRoutes);
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
	res.status(404).send('<h1>Page not found</h1>');
});


app.listen(30003)

