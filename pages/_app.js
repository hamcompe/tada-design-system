import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import {injectGlobal} from 'react-emotion'
import colors from 'design/colors'

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.text};
  }
  h1,h2,h3 {
    margin: 0;
  }
  a {
    color: ${colors.blue};
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${colors.blueHover};
  }
  a[role='button'] {
    user-select: none;
  }
`

export default class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <title>Tada Design System</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
