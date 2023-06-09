import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

import '~/global.css'
import { app } from '~/store'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    app.init()
  }, [])

  return (
    <SessionProvider session={session}>
      <Head>
        <title>React MobX Starter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  )
}
