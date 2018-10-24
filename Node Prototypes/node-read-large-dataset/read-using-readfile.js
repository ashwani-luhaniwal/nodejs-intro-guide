/**
 * Here’s the 4 questions asked, and a link to the data set that the program was to parse through.
 * 
 *  - Write a program that will print out the total number of lines in the file.
 *  - Notice that the 8th column contains a person’s name. Write a program that loads in this data and 
 *    creates an array with all name strings. Print out the 432nd and 43243rd names.
 *  - Notice that the 5th column contains a form of date. Count how many donations occurred in each 
 *    month and print out the results.
 *  - Notice that the 8th column contains a person’s name. Create an array with each first name. 
 *    Identify the most common first name in the data and how many times it occurs.
 * 
 * Link to the data: ​https://www.fec.gov/files/bulk-downloads/2018/indiv18.zip
 */

let fs = require('fs');

let totalLines = 0;
let lines = [];
let names = [];
let firstNames = [];
let dupeNames = {};
let dateDonationCount = [];
let dateDonations = {};

fs.readFile('itcont.txt', 'utf8', (err, contents) => {
    if (contents !== undefined) {
        totalLines = contents.split('\n').length - 1;
    }
    console.log(totalLines);

    if (contents !== undefined) {
        lines = contents.split('\n');
        lines.forEach(line => {
            var name = line.split('|')[7];
            names.push(name);
        });
    }

    console.log(names[432]);
    console.log(names[43243]);

    names.forEach(name => {
        let firstHalfOfName = name.split(', ')[1];
        if (firstHalfOfName !== undefined) {
            firstHalfOfName.trim();

            if (firstHalfOfName !== ' ' && firstHalfOfName.includes(' ')) {
                firstName = firstHalfOfName.split(' ')[0];
                firstName.trim();
                firstNames.push(firstName);
            } else {
                firstNames.push(firstHalfOfName);
            }
        }
    });

    firstNames.forEach(x => {
        dupeNames[x] = (dupeNames[x] || 0) + 1;
    });
    let sortedDupeNames = [];
    sortedDupeNames = Object.entries(dupeNames);

    sortedDupeNames.sort((a, b) => {
        return b[1] - a[1];
    });
    console.log(sortedDupeNames[0]);

    lines.forEach(line => {
        let timestamp = line.split('|')[4].slice(0, 6);
        let formattedTimestamp = timestamp.slice(0, 4) + '-' + timestamp.slice(4, 6);
        dateDonationCount.push(formattedTimestamp);
    });

    dateDonationCount.forEach(x => {
        dateDonations[x] = (dateDonations[x] || 0) + 1;
    });
    logDateElements = (key, value, map) => {
        console.log(`Donations per month and year: ${value} and donation count ${key}`,);
    };
    new Map(Object.entries(dateDonations)).forEach(logDateElements);
});
