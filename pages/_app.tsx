import type { AppProps } from 'next/app'
import '../styles/globals.css'
import MobileWrapper from '../styles/MobileWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileWrapper>
      <Component {...pageProps} />
    </MobileWrapper>
  )
}
