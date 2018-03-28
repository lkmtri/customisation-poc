import React from 'react'
import Router from 'next/router'
import config from 'config'
import { loginUser } from 'api/auth'

const { customisationUIBaseUrl } = config

const makeProtectedPage = (PageComponent) =>
  class Page extends React.PureComponent {
    static async getInitialProps (context) {
      const data = await loginUser({})
      if (!data.sessionId) {
        const { res } = context
        if (res) {
          res.writeHead(302, {
            Location: `${customisationUIBaseUrl}/login`
          })
          res.end()
        } else {
          Router.replace(`${customisationUIBaseUrl}/login`)
        }
        return
      }
      const initialProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {}
      return initialProps
    }

    render () {
      return <PageComponent {...this.props} />
    }
  }

export default makeProtectedPage
