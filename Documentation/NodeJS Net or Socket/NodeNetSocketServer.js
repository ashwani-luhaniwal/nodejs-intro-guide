/**
 * -------------------------------
 * NodeJS - Net or Socket concept
 * -------------------------------
 * Node.js provides the ability to perform socket programming. We can create chat application or 
 * communicate client and server applications using socket programming in Node.js. The Node.js net 
 * module contains functions for creating both servers and clients.
 */

const net = require('net');

let server = net.createServer((socket) => {
    socket.end('goodbye\n');
}).on('error', (err) => {
    // handle errors here
    throw err;
});

// grab a random port
server.listen(() => {
    address = server.address();
    console.log('opened server on %j', address);
});