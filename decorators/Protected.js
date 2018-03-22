import React from 'react'
import Router from 'next/router'
import { loginUser } from 'api/auth'

const makeProtectedPage = (PageComponent) =>
  class Page extends React.PureComponent {
    static async getInitialProps (context) {
      const data = await loginUser({})
      if (!data.sessionId) {
        const { res } = context
        if (res) {
          res.writeHead(302, {
            Location: 'http://oms.localhost/login'
          })
          res.end()
        } else {
          Router.replace('http://oms.localhost/login')
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
