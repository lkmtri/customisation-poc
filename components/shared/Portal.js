import React from 'react'
import ReactDOM from 'react-dom'
import { isBrowser } from 'env'

class Portal extends React.PureComponent {
  constructor (props) {
    super(props)
    if (isBrowser()) {
      this.el = document.createElement('div')
    }
  }

  componentDidMount () {
    if (isBrowser()) {
      const portalDOMNode = document.getElementById('portal-node')
      portalDOMNode.appendChild(this.el)
    }
  }

  componentWillUnmount () {
    if (isBrowser()) {
      const portalDOMNode = document.getElementById('portal-node')
      portalDOMNode.removeChild(this.el)
    }
  }

  render () {
    return this.el
      ? ReactDOM.createPortal(this.props.children, this.el)
      : null
  }
}

export default Portal
