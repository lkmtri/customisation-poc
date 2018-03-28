import React from 'react'
import axios from 'axios'
import withRedux from 'decorators/withRedux'

const isServer = typeof window === 'undefined'

const makePageComponent = (PageComponent) =>
  class Page extends React.PureComponent {
    static async getInitialProps (context) {
      if (isServer) { // Attach browser cookies to requests made from server side
        const cookie = context.req.headers.cookie
        axios.defaults.headers.common['Cookie'] = cookie
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

export default (wrappedComponent) => {
  const PageComponent = makePageComponent(wrappedComponent)
  return withRedux(PageComponent)
}
