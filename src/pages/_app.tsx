import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shuffle Cards</title>
        <link rel="apple-touch-icon" sizes="57x57" href="https://deckofcardsapi.com/static/img/favicon/apple-touch-icon-57x57.png" />
        <link rel="icon" type="image/png" href="https://deckofcardsapi.com/static/img/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="shortcut icon" href="https://deckofcardsapi.com/static/img/favicon/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
