const fs = require('fs');

function nodeStyleCallback(err, data) {
    if (err) {
        console.log('There was an error', err);
        return;
    }
    console.log(data);
}

fs.readFile('NodeErrors.js', nodeStyleCallback);
fs.readFile('/NodeError.js', nodeStyleCallback);