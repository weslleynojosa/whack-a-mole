import GlobalStyles from '@/components/styles/Global.styled'
import { Provider } from 'react-redux'
import store, { persistor } from '@/store'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Wack-a-Mole</title>
    </Head>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </> 
}
