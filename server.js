const http = require('http'); 
const server = http.createServer(function(req, res){ 
  console.log(req)
  req.pipe(res); 
}); 

server.listen(8080, '127.0.0.1');

