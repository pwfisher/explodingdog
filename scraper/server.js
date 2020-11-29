var cheerio = require('cheerio');
var express = require('express');
var request = require('request');
var RSVP = require('rsvp');

const year = '2012';
var input = require(`./${year}`);

var app = express();

app.get('/scrape', function(req, res){
  var result = [];
  var promises = input.map((o, i) => {
    return new RSVP.Promise((resolve, reject) => {
      url = `http://explodingdog.com/title/${o.key}.html`;

      request(url, function(error, response, html){
        if (error) return reject();

        var $ = cheerio.load(html);
        var headings = [], img;

        $('h4, h2').filter(function(){
          headings.push($(this).text().trim());
        });

        $('img').filter(function(){
          img = $(this).attr('src').slice(9); // chop "/drawing/"
        });

        result[i] = {
          id: `${year}.${i + 1}`,
          caption: headings[0],
          date: o.date,
          img,
          key: o.key,
          title: o.title,
        };

        resolve();
      });
    });
  });

  RSVP.all(promises).then(() => {
    res.send(JSON.stringify(result, true, 2));
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
