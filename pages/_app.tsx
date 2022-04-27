import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
