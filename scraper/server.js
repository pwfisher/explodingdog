const cheerio = require('cheerio');
const express = require('express');
const request = require('request');
const RSVP = require('rsvp');
const { tidyTitle } = require('./utils');

const defaultYear = '2012';

const app = express();

app.get('/scrape-year-index', function (req, res){
  const indexYear = req.query.year || defaultYear;
  const url = `http://explodingdog.com/${indexYear}.html`;
  const result = [];
  const promise = new RSVP.Promise((resolve, reject) => {
    request(url, function(error, response, html){
      if (error) return reject();
      const $ = cheerio.load(html);
      $('.day').map((_i, el) => {
        const day = cheerio.load($(el).html());
        const date = day('h3').text();
        const idMatches = day.html().match(/<!--(\d+)/g);
        day('li').map((i, el) => {
          const id = idMatches[i].slice(4);
          const item = cheerio.load($(el).html());
          const key = item('a').attr('href').replace('/title/', '').replace('.html', '');
          const title = tidyTitle(item('a').text());
          result.push({ date, id, key, title });
        })
      })
      resolve();
    });
  });
  RSVP.all([promise]).then(() => {
    res.setHeader('Content-Type', 'application/javascript');
    res.send(`module.exports = ${JSON.stringify(result, true, 2)};`);
  });
});

app.get('/scrape-year-details', function(req, res){
  const detailsYear = req.query.year || defaultYear
  const input = require(`./scraped-indexes/${detailsYear}`);
  const result = [];
  const promises = input.map((o, i) => {
    return new RSVP.Promise((resolve, reject) => {
      const delay = Math.random() * input.length * 10;
      setTimeout(() => {
        const url = `http://explodingdog.com/title/${o.key}.html`;
        request(url, function(error, _response, html){
          if (error) return reject();
          const $ = cheerio.load(html);
          // const sourceTitle = tidyTitle($('h4, h2').first().text());
          result[i] = {
            id: `${detailsYear}.${o.id || 'ERROR'}`,
            date: o.date,
            img: $('img').length && $('img').attr('src')
              .replace('../drawing/', '')
              .replace('/drawing/', '') || 'ERROR',
            key: o.key,
            title: o.title,
            // sourceTitle,
          };
          resolve();
        });
      }, delay)
    });
  });
  RSVP.all(promises).then(() => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result, true, 2));
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
