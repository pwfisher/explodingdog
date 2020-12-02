const fs = require('fs');
const fetch = require('node-fetch');

const year = process.argv[2];
if (!year) {
  console.error('Usage: node fetch-images.js 2012');
  process.exit(1);
}
const input = require(`./scraped-details/${year}`);

async function download(item) {
  const path = `./scraped-images/${item.img}`;
  if (fs.existsSync(path)) {
    console.log(`Skipping ${item.img}, found ${path}`);
    return;
  }
  const url = `http://explodingdog.com/drawing/${item.img}`;
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(path, buffer, () => console.log(url));
}

input.forEach(async item => await download(item));
