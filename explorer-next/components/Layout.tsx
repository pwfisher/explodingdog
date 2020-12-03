import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'explodingdog explorer',
  description = 'explodingdog explorer. An alternate explodingdog experience.'
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' | '}
        <Link href="/about">
          <a>About</a>
        </Link>
        {' | '}
        <Link href="/users">
          <a>Users List</a>
        </Link>
        {' | '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
