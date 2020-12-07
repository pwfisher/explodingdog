import { AppStyle } from '../components/AppStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppStyle />
      <Component {...pageProps} />
    </>
  )
}
