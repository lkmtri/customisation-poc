import React from 'react'
import { Text } from 'components/Typo'

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
      ? (typeof renderError === 'function' ? renderError() : <Text>Something went wrong.</Text>)
      : children
  }
}

export default ErrorBoundary
