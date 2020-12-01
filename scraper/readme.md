Annual indexes, e.g. `2000.js`, are manually extracted from source indexes, e.g. http://explodingdog.com/2000.html.

This scraper parses indexed detail pages, e.g. http://explodingdog.com/title/100years.html, to produce complete data.

```sh
cd scraper
npm install
node server.js
```

First, open
- http://localhost:8081/scrape-year-index?year=2000, etc.
- Save these to this directory to scrape the indexed detail pages.

Then open
- http://localhost:8081/scrape-year-details?year=2000, etc.
- This is our complete source data.
