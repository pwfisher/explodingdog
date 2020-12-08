import React, { ReactNode } from 'react'
import Head from 'next/head'
import { PageHeader } from './PageHeader'
import { PageFooter } from './PageFooter'
import { assetPrefix } from '../lib/assetPrefix'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

export const PageLayout = ({
  children,
  title = 'explodingdog explorer',
  description = 'explodingdog explorer. An alternate explodingdog experience.'
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${assetPrefix}/apple-touch-icon.png`} />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <link rel="manifest" href={`${assetPrefix}/manifest.json`} />
    </Head>
    <PageHeader />
    {children}
    <PageFooter />
  </>
)
