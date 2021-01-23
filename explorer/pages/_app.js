import { AppFlagCookieSetter } from '../components/AppFlagCookieSetter'
import { AppStyle } from '../components/AppStyle'
import { CookiesProvider } from 'react-cookie'
import Modal from 'react-modal'
import { MyTagsContainer } from '../containers/MyTags'

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <MyTagsContainer.Provider>
        <AppFlagCookieSetter />
        <AppStyle />
        <Component {...pageProps} />
      </MyTagsContainer.Provider>
    </CookiesProvider>
  )
}
