const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

const url = 'https://news.ycombinator.com';

let getData = html => {
    data = [];
    const $ = cheerio.load(html);
    $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
        data.push({
            title: $(elem).text(),
            link: $(elem).find('a.storylink').attr('href')
        });
    });
    console.log(data);
}

axios.get(url)
    .then(response => {
        console.log(response.data);
        getData(response.data);
    })
    .catch(error => {
        console.log(error);
    });

app.listen(3000, () => {
    console.log('Server is listening at: http://localhost:3000');
});