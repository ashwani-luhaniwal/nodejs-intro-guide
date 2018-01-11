/**
 * -----------------
 * NodeJS - TLS/SSL
 * -----------------
 * 
 * -----------------
 * What is TLS/SSL ?
 * -----------------
 * TLS stands for Transport Layer Security. It is the successor to Secure Sockets Layer (SSL). TLS 
 * along with SSL is used for cryptographic protocols to secure communication over the web.
 * TLS uses public-key cryptography to encrypt messages. It encrypts communication generally on the TCP 
 * layer.
 * 
 * ----------------------------------
 * What is public-key cryptography ?
 * ----------------------------------
 * In public-key cryptography, each client and each server has two keys: public key and private key. 
 * Public key is shared with everyone and private key is secured. To encrypt a message, a computer requires 
 * its private key and the recipient's public key. On the other hand, to decrypt the message, the recipient 
 * requires its own.
 * 
 * You have to use require('tls') to access this module.
 * 
 *      var tls = require('tls');
 * 
 * The tls module uses OpenSSL to attain Transport Layer Security and Secure Socket Layer. TLS/SSL is a 
 * public/private key infrastructure. Each client and each server must have a private key.
 * A private key can be created like this:
 * 
 *      openssl genrsa -out ryans-key.pem 1024
 * 
 * All severs and some clients need to have a certificate. Certificates are public keys signed by a 
 * Certificate Authority or self-signed. To get certificate, you have to create a 
 * "Certificate Signing Request" (CSR) file.
 * A certificate can be created like this:
 * 
 *      openssl req -new -key ryans-key.pem -out ryans-cse.pem
 * 
 * To create a self-signed certificate with the CSR:
 * 
 *      openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
 * 
 * 
 */