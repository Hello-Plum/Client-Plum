import type { AppProps } from 'next/app'
import '../styles/globals.css'
import './create/components/SetAvailableDates.css'
import { RecoilRoot } from 'recoil'
import MobileWrapper from '../styles/MobileWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MobileWrapper>
        <Component {...pageProps} />
      </MobileWrapper>
    </RecoilRoot>
  )
}
