const http=require('http');


const server=http.createServer((req,res)=>{

	console.log('listening')
	console.log(req.url)


	if(req.url=="/"){

		res.write("<html>");
		res.write("<body>");
		res.write("<h1>Hello World </h1>");
    	res.write("</body>");
		res.write("</html>");
	}
});


server.listen(8080)