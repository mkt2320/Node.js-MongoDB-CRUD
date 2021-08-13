var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //HTTP header
  res.end('Hi, myself Miti Tamakuwala.');
}).listen(8080); 


/*
var http = require('http');

//create a server object
http.createServer(function(req,res){
  res.write("Hello everyone!"); //write a response to the client
  res.end();  //end the response
}).listen(8080);  //the server object listens on port 8080 

*/