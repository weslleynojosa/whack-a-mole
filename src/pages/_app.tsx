import GlobalStyles from '@/components/styles/Global.styled'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyles/>
    <Component {...pageProps} />
  </> 
}
