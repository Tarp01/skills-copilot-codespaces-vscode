// Create a web server that can respond to requests for /comments.json with a JSON-encoded array of comments,
// much like your server did in the previous homework.

var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = require('./comments.json');

var server = http.createServer(function(req, res) {
  var path = req.url;
  var parsed = url.parse(path, true);
  var query = parsed.query;
  var pathname = parsed.pathname;
  if (pathname === '/comments.json') {
    if (query.search) {
      var search = query.search.toLowerCase();
      var searchResults = [];
      for (var i = 0; i < comments.length; i++) {
        var searchObj = comments[i];
        if (searchObj['body'].toLowerCase().indexOf(search) !== -1) {
          searchResults.push(searchObj);
        }
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(searchResults));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(comments));
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 not found');
  }
});

server.listen(8080);
console.log('server listening on port 8080');