/**
 * --------------
 * NodeJS Timers
 * --------------
 * Node.js Timer functions are global functions. You don't need to use require() function in order to
 * use timer functions.
 * 
 * Set timer functions:
 * - setImmediate(): It is used to execute setImmediate.
 * - setInterval(): It is used to define a time interval.
 * - setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.
 * 
 * Clear timer functions:
 * - clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
 * - clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
 * - clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout
 */

/**
 * -----------------------
 * setInterval() function
 * -----------------------
 */
// set a time interval of 1000 millisecond and the specified comment will be displayed after every 
// 1000 millisecond until you terminate.
setInterval(function() {
    console.log('setInterval: Hey! 1 millisecond completed!..');
}, 1000);

// In order to increment value of i after 1000 millisecond:
var i = 0;
console.log(i);
setInterval(function() {
    i++;
    console.log(i);
}, 1000);

/**
 * ----------------------
 * setTimeout() function
 * ----------------------
 */
setTimeout(function() {
    console.log('setTimeout: Hey! 1000 millisecond completed!...');
}, 1000);

// Shows time out after every 1000 millisecond without setting a time interval. This example uses the 
// recursion property of a function.
var recursive = function() {
    console.log('Hey! 1000 millisecond completed!...');
    setTimeout(recursive, 1000);
}
recursive();

/**
 * ------------------------
 * clearTimeout() function
 * ------------------------
 */
function welcome() {
    console.log('Welcome to Node');
}
var id1 = setTimeout(welcome, 1000);
var id2 = setInterval(welcome, 1000);
clearTimeout(id1);