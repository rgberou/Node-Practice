const http=require('http');

const routes=require('./routes')

/*http.createServer(function(req,res){

});*/

const server=http.createServer(routes);

server.listen(30001);

