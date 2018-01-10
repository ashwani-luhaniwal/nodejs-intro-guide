/**
 * Decryption using Decipher
 * --------------------------
 */
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'a password');

let encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);