const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const expressHbs=require('express-handlebars');

const app=express();

//Adding ejs
app.set('view engine','ejs');
app.set('views','views');


//Adding handlebars
//app.engine('hbs',expressHbs({layoutsDir:'views/layout/',defaultLayout:'main-layout',extname:'hbs'}))
//app.set('view engine','hbs');
//app.set('views','views');

//Adding pug
//app.set('view engine','pug');
//app.set('views','views');

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop')

//adding body parser
app.use(bodyParser.urlencoded({extended:false}));app.use(express.static(path.join(__dirname,'public')));
//app.use('/admin',adminRoutes);
app.use('/admin',adminData);
app.use(shopRoutes);

app.use((req,res,next)=>{
	//res.status(404).send('<h1>Page not found</h1>');
	res.status(404).render('404',{pageTitle:"Page not found"});
});


app.listen(30003)

