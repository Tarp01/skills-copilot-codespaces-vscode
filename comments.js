// Create web server
// Load the comments.json file
// Respond to requests with the contents of the comments.json file

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

var comments = require('./comments.json');
var commentsString = JSON.stringify(comments);

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var urlObj = url.parse(request.url);

  if (urlObj.pathname === '/comments.json') {
    if (request.method === 'GET') {
      response.setHeader('Content-Type', 'application/json');
      response.end(commentsString);
    } else if (request.method === 'POST') {