/**
 * ----------------
 * NodeJS - Crypto
 * ----------------
 * The Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes
 * a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.
 * 
 * ---------------
 * What is Hash ?
 * ---------------
 * A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some 
 * arbitrary block of source data.
 * 
 * ----------------
 * Whats is HMAC ?
 * ----------------
 * HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm 
 * to both data and a secret key that results in a single final hash.
 */

// Encryption using Hash and HMAC
const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                .update('Welcome to Node World')
                .digest('hex');
console.log(hash);