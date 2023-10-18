// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded array of comments, much like your server that
// responds to /guestbook.json
//
// You'll need to read the comments from a file named comments.json
// and parse them to an array, then respond with the array encoded as
// JSON.
//
// You can test your server by running:
//   curl -is http://localhost:8080/comments.json
//
// When you're done, run learnyouhtml verify comments.js and then
// run learnyouhtml run comments.js to try out your server.
//
// ## HINTS
//
// You'll need to use the fs module to read the comments from the
// file. Here's an example of how to use the fs module to read a file:
//
//   var fs = require('fs')
//   fs.readFile('guestbook.json', function (err, data) {
//     if (err) throw err
//     console.log(data.toString())
//   })
//
// You'll also need to use the http module to create the web server.
// Here's an example of how to create an HTTP server:
//
//   var http = require('http')
//   var server = http.createServer(function (req, res) {
//     res.end('hello!')
//   })
//   server.listen(8080)
//
// Finally, you'll need to use JSON.stringify() to convert your
// JavaScript array to JSON. Here's an example:
//
//   var array = ['hello', 'goodbye']
//   var json = JSON.stringify(array)
//   console.log(json)
//
// In this example, the string that will be printed is:
//
//   '["hello","goodbye"]'
//
// ## NOTE
//
// If you get an error like this when you run your program:
//
//   SyntaxError: Unexpected token u
//
// It means that you're trying to parse a file that doesn't exist.
// Make sure you're reading from the correct file!

var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  fs.readFile('comments.json', function (err, data) {
    if (err) throw err
    res.end(data.toString())
  })
})

server.listen(8080)