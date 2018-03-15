import React from 'react'
import { TextStyle } from 'components/shared/Typo'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true })

    console.log('error: ', error)
    console.log('info: ', info)
  }

  render () {
    const { renderError, children } = this.props
    const { hasError } = this.state
    return hasError
      ? (typeof renderError === 'function' ? renderError() : <TextStyle>Something went wrong.</TextStyle>)
      : children
  }
}

export default ErrorBoundary
