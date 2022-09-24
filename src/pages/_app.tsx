import '../styles/globals.css'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({
   Component,
   pageProps,
}: AppProps<{
session: Session;
}>) {
  return (
      <>
          <SessionProvider session={pageProps.session}>
              <Head>
                  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                  <title>Getting Things Done</title>
              </Head>
              <MantineProvider
                  withGlobalStyles
                  withNormalizeCSS
                  theme={{
                      /** Put your mantine theme override here */
                      colorScheme: 'light',
                  }}
              >
                  <Component {...pageProps} />
              </MantineProvider>
          </SessionProvider>
      </>
  )
}

export default MyApp
