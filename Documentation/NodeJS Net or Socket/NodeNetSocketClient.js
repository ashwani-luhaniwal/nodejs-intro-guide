const net = require('net');

// You must match the port. The client and server should have similar port for successful connection
const client = net.connect({port: 43683}, () => {
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});