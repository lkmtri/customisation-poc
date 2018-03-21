import React from 'react'
import { connect } from 'react-redux'
import { STORE_KEY as OWN_STORE_KEY } from './constants'
import { STORE_KEY as PREVIEW_FRAME_STORE_KEY } from 'containers/CustomisationPreview/constants'
import { reducers } from './reducers'

class FrameConnector extends React.PureComponent {
  static getReducers = () => ({ [OWN_STORE_KEY]: reducers })

  componentDidMount () {
    if (window !== undefined) {
      const { dispatch } = this.props
      window.addEventListener('message', function (event) {
        if (event.origin === 'http://localhost:3001') {
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
      frame && frame.contentWindow.postMessage(update, 'http://localhost:3001')
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
  ...state[OWN_STORE_KEY],
  ...state[PREVIEW_FRAME_STORE_KEY]
})

export default connect(mapStateToProps)(FrameConnector)
