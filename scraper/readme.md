# Indexes and Details

Annual indexes, e.g. `2000.js`, are scraped from source indexes, e.g. http://explodingdog.com/2000.html and manually corrected.

We then scrape indexed detail pages, e.g. http://explodingdog.com/title/100years.html, to produce complete details.

```sh
cd scraper
npm install
node server.js
```

First, open
- http://localhost:8081/scrape-year-index?year=2000, etc.
- Once we save that, we can scrape the indexed detail pages.
- Manually correct any data issues.

Then open
- http://localhost:8081/scrape-year-details?year=2000, etc.
- This is our complete source data.
- WARNING: This hits the source server hard. Be considerate.

# Images

Once we have details, e.g. `/scraped-details/2000.json`, we can fetch the images.
We use a separate script (`fetch-images`), not the server.

```sh
cd scraper
npm install
nvm use
node fetch-images.js 2000
```

This script is as simple as possible. It's flaky, but it doesn't matter.
It skips already-fetched images, so it's safe to re-run. And re-run it you should.
- Kill and restart it whenever it hangs up.
- Re-run it whenever a file is missed for some reason (ECONNRESET and incorrect 404s were seen).
- If an image is in subdirectory (e.g. `/smaller/`), you need to manually create it.
Run it repeatedly until the year is complete, then run it for the next year. Et Voilà.
