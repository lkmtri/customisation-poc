import React from 'react'
import { connect } from 'react-redux'
import config from 'config'
import { storeKeys } from 'redux-store'

const { fescBaseUrl } = config

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    if (window !== undefined) {
      const { dispatch } = this.props
      window.addEventListener('message', function (event) {
        if (event.origin === fescBaseUrl) {
          dispatch(event.data)
        }
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { currentAction } = nextProps
    currentAction.shouldUpdateFrame && this.pushUpdateToPreviewFrame(currentAction)
  }

  pushUpdateToPreviewFrame = (update) => {
    const { frame } = this.props
    if (window !== undefined) {
      frame && frame.contentWindow.postMessage(update, fescBaseUrl)
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state[storeKeys.frame],
  ...state[storeKeys.customisation]
})

export default connect(mapStateToProps)(FrameConnector)
