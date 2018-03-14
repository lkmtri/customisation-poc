import React from 'react'
import { connect } from 'react-redux'
import { STORE_KEY as OWN_STORE_KEY } from './constants'
import { STORE_KEY as PREVIEW_FRAME_STORE_KEY } from 'containers/CustomisationPreview/constants'
import { loadTheme as loadThemeAction } from 'containers/CustomisationSidebar/actions'
import { initialState, reducers } from './reducers'

class FrameConnector extends React.PureComponent {
  static getInitialState = () => ({ [OWN_STORE_KEY]: initialState })

  static getReducers = () => ({ [OWN_STORE_KEY]: reducers })

  componentDidMount () {
    if (window !== undefined) {
      const { loadTheme } = this.props
      window.addEventListener('message', function (event) {
        if (event.origin === 'http://localhost:3001') {
          loadTheme(event.data)
        }
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { currentAction, frame } = nextProps
    if (currentAction.shouldUpdateFrame && window !== undefined) {
      frame && frame.contentWindow.postMessage(currentAction, 'http://localhost:3001')
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

const mapDispatchToProps = (dispatch) => ({
  loadTheme: (theme) => dispatch(loadThemeAction(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(FrameConnector)
