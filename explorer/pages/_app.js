import { AppFlags } from '../components/AppFlags'
import { AppStyle } from '../components/AppStyle'
import { CookiesProvider } from 'react-cookie'

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <AppFlags />
      <AppStyle />
      <Component {...pageProps} />
    </CookiesProvider>
  )
}
