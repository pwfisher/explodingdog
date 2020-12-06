import { AppStyle } from '../components/AppStyle'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppStyle />
      <Component {...pageProps} />
    </>
  )
}
