var http = require("http");
var express = require('express');

console.log('make sure express module is present', express);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header
    var url = req.url;
    if (url === "/about") {
      res.write("<h1>about us page<h1>"); //write a response
      res.end(); //end the response
    } else if (url === "/contact") {
      res.write("<h1>contact us page<h1>"); //write a response
      res.end(); //end the response
    } else {
      res.write("<h2>Welcome to David He's App Service Lab<h2>"); //write a response
      res.end(); //end the response
    }
  })
  .listen(8080, function () {
    console.log("server start at port 8080"); //the server object listens on port 3000
  });
