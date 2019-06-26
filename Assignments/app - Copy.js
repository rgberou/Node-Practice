const http=require('http');


const server=http.createServer((req,res)=>{

	console.log('listening')
	console.log(req.url)


	if(req.url=="/"){
		res.setHeader('Content-Type','text/html')
		res.write("<html>");
		res.write("<body>");
		res.write("<h1>Hello World </h1>");
		res.write("<form method='POST' action='/create-user'>");
		res.write("<input type='text' name='fname'><br><br>")
		res.write("<input type='submit' name='submitBtn'>")
		res.write("</form>")
    	res.write("</body>");
		res.write("</html>");

	}
	if(req.url=="/create-user"){
		const body=[];
		req.on('data',(chunk)=>{
	 		body.push(chunk);
		});

		req.on('end',()=>{
		const parseBody=Buffer.concat(body).toString();
		console.log(parseBody)
		console.log(parseBody.split('&')[0].split('=')[1])
		//const message=parseBody.split('&')[0].split('=')[1];
			//fs.writeFile('message.text',message);
			res.statusCode=302;
			//res.setHeader('Location','/');
			return res.end();
		});
	}

});


server.listen(3000)