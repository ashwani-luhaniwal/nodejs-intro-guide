/**
 * -----------------
 * NodeJS - Buffers
 * -----------------
 * Node.js provides Buffer class to store raw data similar to an array of integers but corresponds to a 
 * raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not nice 
 * to binary data. So, when dealing with TCP streams or the file system, it's necessary to handle 
 * octet streams.
 * Buffer class is a global class. It can be accessed in application without importing buffer module.
 * 
 * -----------------
 * Creating Buffers
 * -----------------
 * There are many ways to construct a Node buffer. Following are the three mostly used methods:
 * 
 * 1. Create an uninitiated buffer: Following is the syntax of creating an uninitiated buffer of 10 octets:
 *      var buf = new Buffer(10);
 * 
 * 2. Create a buffer from array: Following is the syntax to create a Buffer from a given array:
 *      var buf = new Buffer([10, 20, 30, 40, 50]);
 * 
 * 3. Create a buffer from string: Following is the syntax to create a Buffer from a given string 
 *    and optionally encoding type:
 *      var buf = new Buffer('Simply Easy Learning', 'utf-8');
 * 
 * -------------------
 * Writing to Buffers
 * -------------------
 * Following is the method to write into a Node buffer:
 * 
 *      buf.write(string[, offset][, length][, encoding])
 * 
 * string: It specifies the string data to be written to buffer.
 * offset: It specifies the index of the buffer to start writing at. Its default value is 0.
 * length: It specifies the number of bytes to write. Defaults to buffer.length
 * encoding: Encoding to use. 'utf8' is the default encoding.
 */

// Return number of octets written.
var buf = new Buffer(256);
var len = buf.write('Simply Easy Learning');
console.log('Octets written: ' + len);

/**
 * ---------------------
 * Reading from Buffers
 * ---------------------
 * Following is the method to read data from a Node buffer:
 *  
 *      buf.toString([encoding][, start][, end])
 * 
 * encoding: It specifies encoding to use. 'utf8' is the default encoding
 * start: It specifies beginning index to start reading, defaults to 0.
 * end: It specifies end index to end reading, defaults is complete buffer.
 */

// This method decodes and returns a string from buffer data encoded using specified character set
// encoding
buf = new Buffer(26);

for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
