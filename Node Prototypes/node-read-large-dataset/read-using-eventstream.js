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

let fs = require('fs'),
    es = require('event-stream');

let totalLines = 0;
let names = [];
let firstNames = [];
let dupeNames = {};
let dateDonationCount = [];
let dateDonations = {};

/**
 * The biggest change was the pipe commands at the beginning of the file — all of that syntax is the 
 * way EventStream’s documentation recommends you break up the stream into chunks delimited by the \n 
 * character at the end of each line of the .txt file.
 */

let s = fs.createReadStream('/Users/pxn5096/Downloads/indiv18/itcont.txt')
            .pipe(es.split())
            .pipe(
                es.mapSync(line => {
                    totalLines++;

                    // get all names
                    let name = line.split('|')[7];
                    if (totalLines === 433 || totalLines === 43244) {
                        names.push(name);
                    }

                    // get all first halves of names
                    let firstHalfOfName = name.split(', ')[1];

                    if (firstHalfOfName !== undefined) {
                        firstHalfOfName.trim();

                        // filter out middle initials
                        if (firstHalfOfName.includes(' ') && firstHalfOfName !== ' ') {
                            firstName = firstHalfOfName.split(' ')[0];
                            firstName.trim();
                            firstNames.push(firstName);
                        } else {
                            firstNames.push(firstHalfOfName);
                        }
                    }

                    // year and month
                    let timestamp = line.split('|')[4].slice(0, 6);
                    let formattedTimestamp = timestamp.slice(0, 4) + '-' + timestamp.slice(4, 6);
                    dateDonationCount.push(formattedTimestamp);
                })
                .on('error', err => {
                    console.log('Error while reading file.', err);
                })
                .on('end', () => {
                    console.log('Read entire file.');
                    console.log(totalLines);

                    console.log(names);

                    // most common first name
                    firstNames.forEach(x => {
                        dupeNames[x] = (dupeNames[x] || 0) + 1;
                    });
                    let sortedDupeNames = [];
                    sortedDupeNames = Object.entries(dupeNames);

                    sortedDupeNames.sort((a, b) => {
                        return b[1] - a[1];
                    });
                    console.log(sortedDupeNames[0]);

                    // number of donations per month
                    dateDonationCount.forEach(x => {
                        dateDonations[x] = (dateDonations[x] || 0) + 1;
                    });
                    logDateElements = (key, value, map) => {
                        console.log(
                            `Donations per month and year: ${value} and donation count ${key}`,
                        );
                    };
                    new Map(Object.entries(dateDonations)).forEach(logDateElements);
                }),
            );