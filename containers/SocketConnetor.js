import React from 'react'
import socket from 'socket.io-client'
import config from 'config'
import { executeIfDevEnv } from 'tools/function'

class SocketConnector extends React.PureComponent {
  componentDidMount () {
    this.connectToSocket()
    this.listenForThemeSchemaUpdate()
  }

  componentWillUnmount () {
    this.disconnectFromSocket && this.disconnectFromSocket()
  }

  connectToSocket = executeIfDevEnv(() => {
    this.io = socket(config.customisationUIBaseUrl, {
      path: '/api/subscription'
    })
    this.io.on('connect', () => console.log('connected to socket'))
    this.disconnectFromSocket = this.io.close
  })

  listenForThemeSchemaUpdate = executeIfDevEnv(() => {
    this.io.on('theme_schema_update', (data) => {
      console.log(data)
    })
  })

  render () {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default SocketConnector
