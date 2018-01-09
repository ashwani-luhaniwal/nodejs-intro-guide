/**
 * -----------------
 * What is NodeJS ?
 * -----------------
 * Node.js is a cross-platform runtime environment and library for running JavaScript applications 
 * outside the browser. It is used for creating server-side and networking web applications. It is 
 * open source and free to use. Many of the basic modules of Node.js are written in JavaScript. 
 * Node.js is mostly used to run real-time server applications.
 * 
 * Official Definition:
 * Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable 
 * network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight 
 * and efficient, perfect for data-intensive real-time applications that run across distributed devices.
 * Node.js also provides a rich library of various JavaScript modules to simplify the development of web 
 * applications.
 * 
 * ------------------
 * Features of NodeJS
 * -------------------
 * - Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very 
 *   fast in code execution.
 * - I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking.
 *   So a Node.js based server never waits for an API to return data. The server moves to the next API 
 *   after calling it and a notification mechanism of Events of Node.js helps the server to get a response 
 *   from the previous API call. It is also a reason that it is very fast.
 * - Single threaded: Node.js follows a single threaded model with event looping.
 * - Highly Scalable: Node.js is highly scalable because event mechanism helps the server to respond in a 
 *   non-blocking way.
 * - No buffering: Node.js cuts down the overall processing time while uploading audio and video files. 
 *   Node.js applications never buffer any data. These applications simply output the data in chunks.
 * - Open source: Node.js has an open source community which has produced many excellent modules to add 
 *   additional capabilities to Node.js applications.
 * - License: Node.js is released under the MIT license.
 * 
 * --------------
 * NodeJS Console
 * ---------------
 * The Node.js console module provides a simple debugging console similar to JavaScript console mechanism 
 * provided by web browsers.
 * There are three console methods that are used to write any node.js stream:
 * - console.log()
 * - console.error()
 * - console.warn()
 * 
 * The console.log() function is used to display simple message on console.
 *      console.log('Hello World);
 * We can also use format specifier in console.log() function.
 *      console.log('Hello %s', 'World');
 * 
 * The console.error() function is used to render error message on console.
 *      console.log(new Error('Hell! This is wrong method.'));
 * 
 * The console.warn() function is used to display warning message on console.
 *      const name = 'Ashwani';
 *      console.log(`Don't mess with me ${name}! Don't mess with me!`);
 * 
 * ------------
 * NodeJS REPL
 * ------------
 * The term REPL stands for Read Eval Print and Loop. It specifies a computer environment like a window 
 * console or a Unix/Linux shell where you can enter the commands and the system responds with an output 
 * in an interactive mode.
 * 
 * -----------------
 * REPL Environment
 * -----------------
 * The Node.js or node come bundled with REPL environment. Each part of the REPL environment has a 
 * specific work.
 * - Read: It reads user's input; parse the input into JavaScript data-structure and stores in memory.
 * - Eval: It takes and evaluates the data structure.
 * - Print: It prints the result.
 * - Loop: It loops the above command until user press ctrl-c twice.
 * 
 * -----------------------------
 * NodeJS Package Manager (npm)
 * -----------------------------
 * Node Package Manager provides two main functionalities:
 * - It provides online repositories for node.js packages/modules which are searchable on 
 *   search.nodejs.org
 * - It also provides command line utility to install Node.js packages, do version management and 
 *   dependency management of Node.js packages.
 */