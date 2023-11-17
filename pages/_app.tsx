import type { AppProps } from 'next/app'
import '../styles/globals.css'
import './create/components/SetAvailableDates.css'
import './enter/member/components/SetAvailableTimeTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil'
import MobileWrapper from '../styles/MobileWrapper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  //const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      {/*<QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />*/}
      <MobileWrapper>
        <Component {...pageProps} />
      </MobileWrapper>
      {/*</QueryClientProvider>*/}
    </RecoilRoot>
  )
}
