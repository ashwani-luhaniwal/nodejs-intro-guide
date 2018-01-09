/**
 * NodeJS Web based Example
 * -------------------------
 * A node.js web application contains the following three parts:
 * - Import required modules: The "require" directive is used to load a Node.js module.
 * - Create server: You have to establish a server which will listen to client's request similar to 
 *   Apache HTTP Server.
 * - Read request and return response: Server created in the second step will read HTTP request made by 
 *   client which can be a browser or console and return the response.
 */

// store returned HTTP instance
var http = require('http');

http.createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body as "Hello World"
    response.end('Hello World');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');