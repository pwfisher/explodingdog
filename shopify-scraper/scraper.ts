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

type LocUrl = {
  loc: string // e.g. 'https://www.buildingaworld.com/products/crazy-monster-takes-a-walk'
  lastmod: string // e.g. '2020-12-16T15:31:48-05:00'
  changeFreq: string[]
  'image:image': LocImage[]
}

type LocImage = {
  'image:loc': string[]
  'image:title': string[]
}

try {
  const response = await got(baseSitemapUrl)
  const data = await parseStringPromise(response.body)
  const productSitemapUrls: string[] = data.sitemapindex.sitemap
    .map((o: any) => o.loc[0])
    .filter((s: string) => s.match(/sitemap_products_/))

  await productSitemapUrls.forEach(async (url) => {
    const response = await got(url)
    const data = await parseStringPromise(response.body)

    console.log('First 5 product locations:', data.urlset.url.slice(0, 5))

    data.urlset.url
      .filter((o: any) => o['image:image'] && !o.loc.includes('/products/any-drawing'))
      .forEach(async (o: LocUrl) => {
        const year = o.lastmod.slice(0, 4)
        if (!yearDrawingLists[year]) yearDrawingLists[year] = []

        const number: string = (yearDrawingLists[year].length + 1).toString()
        const title = o['image:image'][0]['image:title'][0]
        const slugMatch = o.loc[0].match(/\/products\/(.*)/)
        const slug = slugMatch?.[1] ?? ''

        const src = o['image:image'][0]['image:loc'][0]
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
          date: o.lastmod.slice(0, 10),
          title,
          slug,
          image: `shopify/${srcBase}`,
        }
        yearDrawingLists[year].push(drawing)
      })
  })
  console.log('yearDrawingLists:', yearDrawingLists)
} catch (error) {
  console.log(error?.response?.body || error);
}
