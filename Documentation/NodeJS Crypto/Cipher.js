/**
 * Encryption using Cipher
 */

const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'a Password');

var encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);