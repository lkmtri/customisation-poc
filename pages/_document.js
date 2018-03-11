import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal, ServerStyleSheet } from 'styled-components'

injectGlobal`
  html, body {
    margin: 0;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;  
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default class AppDocument extends Document {
  static getInitialProps ({ renderPage, query }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, query }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com/' />
          <meta name='viewport' content='width=device-width, minimal-ui, initial-scale=1' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          {this.props.styleTags}
        </Head>
        <body>
          <div className='root'>
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
