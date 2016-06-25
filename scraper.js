//
// Scraper for http://explodingdog.com (2000-2006)
//
// Precondition: load https://code.jquery.com/jquery-3.0.0.min.js
//
var result = [];
var date = null;
var specialDates = {
  'march and april 2000': '2000-04-01',
};
$('a[href*="title"], b, em, .date')
  .each((i, node) => {
    if (
      node.tagName === 'B' || // 2000-2005
      node.tagName === 'EM' || // 2006
      node.className === 'date'// 2007
    ) {
      var s = $(node).text().trim();
      var isDate = /^\d\d\.\d\d\.\d\d$/.test(s);
      if (isDate) {
        date = `20${s.slice(-2)}-${s.slice(0, -3).replace('.', '-')}`;
      } else if (specialDates[s]) {
        date = specialDates[s];
      }
    }
    if (node.tagName === 'A') {
      var key = $(node).attr('href').trim().slice(6, -5); // a malformed href in 2001 has a leading space
      var title = $(node).text().trim();
      var lastResult = result[result.length - 1] || {};
      if (key === lastResult.key) { // a malformed link in 2000 is split in two
        lastResult.title += ' ' + title;
      } else if (date) {
        result.push({ date, key, title });
      }
      lastKey = key;
    }
  });
console.log(JSON.stringify(result, true, 2));
