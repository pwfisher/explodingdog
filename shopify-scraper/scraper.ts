#!/usr/bin/env ts-node-script
import got from 'got'
import { parseStringPromise } from 'xml2js'
import { Drawing } from '../explorer/types'
import fs from 'fs'
import stream from 'stream'
import { promisify } from 'util'

const pipeline = promisify(stream.pipeline)

const baseSitemapUrl = 'https://www.buildingaworld.com/sitemap.xml'
const yearDrawingLists: Record<string, Drawing[]> = {}

type SitemapItem = {
  loc: string // e.g. 'https://www.buildingaworld.com/products/crazy-monster-takes-a-walk'
  lastmod: string // e.g. '2020-12-16T15:31:48-05:00'
  changeFreq: string[]
  'image:image': SitemapImage[]
}

type SitemapImage = {
  'image:loc': string[]
  'image:title': string[]
}

try {
  const response = await got(baseSitemapUrl)
  const data = await parseStringPromise(response.body)
  const productSitemapUrls: string[] = data.sitemapindex.sitemap
    .map((o: any) => o.loc[0])
    .filter((s: string) => s.match(/sitemap_products_/))

  for (const url of productSitemapUrls) {
    const response = await got(url)
    const data = await parseStringPromise(response.body)

    console.log('First 5 product locations:', data.urlset.url.slice(0, 5))

    const items: SitemapItem[] = data.urlset.url
      .filter((o: any) => o['image:image'] && !o.loc.includes('/products/any-drawing'))

    for (const item of items) {
      const year = item.lastmod[0].slice(0, 4)
      if (!yearDrawingLists[year]) yearDrawingLists[year] = []

      const number: string = (yearDrawingLists[year].length + 1).toString()
      const title = item['image:image'][0]['image:title'][0].replace(' - original', '')
      const slugMatch = item.loc[0].match(/\/products\/(.*)/)
      const slug = (slugMatch?.[1] ?? '').replace('-original', '')

      const src = item['image:image'][0]['image:loc'][0]
      const srcMatch = src.match(/([^/]+)\?/)
      const srcBase = srcMatch?.[1]
      const srcPath = `./scraped-images/${srcBase}`;

      if (fs.existsSync(srcPath)) {
        console.log(`Skipping ${srcBase}, found ${srcPath}`);
      } else {
        await pipeline(got.stream(src), fs.createWriteStream(srcPath))
      }

      const drawing: Drawing = {
        id: `${year}.${number}`,
        year,
        number,
        date: item.lastmod[0].slice(0, 10),
        title,
        slug,
        image: `shopify/${srcBase}`,
      }
      yearDrawingLists[year].push(drawing)
    }
  }

  for (const year in yearDrawingLists) {
    fs.writeFileSync(
      `./scraped-products/${year}.out.json`,
      JSON.stringify(yearDrawingLists[year], null, 2)
    )
  }
} catch (error) {
  console.log(error?.response?.body || error);
}
