const http=require('http');
const fs=require('fs');

/*http.createServer(function(req,res){

});*/

const server=http.createServer((req,res)=>{

	console.log(req.url, req.method, req.headers);

	let url=req.url;
	const method=req.method;

	if(url=='/'){
		res.write('<html>');
		res.write('<body>');
		res.write('<form action="/SaveData" method="POST">');
		res.write('<input type="text" name="message">');
		res.write('<input type="submit" name="butSubmit">');
		res.write('</form>');
		res.write('</body>');
		res.write('</html>');

		return res.end();

	}
	if(url=="/SaveData" && method=="POST"){
		const body=[];
		req.on('data',(chunk)=>{
	 		body.push(chunk);
		});
		req.on('end',()=>{
			const parseBody=Buffer.concat(body).toString();
			console.log(parseBody)
			console.log(parseBody.split('&')[0].split('=')[1])
			const message=parseBody.split('&')[0].split('=')[1];
			//fs.writeFileSync('message.text',message);
			fs.writeFile('message.text',message);
			res.statusCode=302;
			res.setHeader('Location','/');
			return res.end();
		});
		
	
	}
	res.setHeader('Content-Type','text/html');
	res.write('<html>')
	res.write('<body>')
	res.write('<h1> This is a node js app </h1>')
	res.write('</body>')
	res.write('</html>')
	res.end();
	//process.exit();
});

server.listen(30001);

