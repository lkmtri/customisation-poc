import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { STORE_KEY as CUSTOMISATION_STORE_KEY } from 'containers/CustomisationSidebar/constants'
import { STORE_KEY as OWN_STORE_KEY } from './constants'
import { STORE_KEY as PREVIEW_FRAME_STORE_KEY } from 'containers/CustomisationPreview/constants'
import { loadTheme } from 'containers/CustomisationSidebar/actions'
import * as actions from './actions'
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
    const { currentAction, pushUpdateToPreviewFrame, pushUpdate } = nextProps
    currentAction.shouldUpdateFrame && pushUpdateToPreviewFrame()
    this.props.pushUpdate !== pushUpdate && this.pushUpdateToPreviewFrame()
  }

  pushUpdateToPreviewFrame = () => {
    const { frame, themeSettingData, sectionSettingData } = this.props
    if (window !== undefined) {
      frame && frame.contentWindow.postMessage({
        themeSettingData,
        sectionSettingData
      }, 'http://localhost:3001')
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
  ...state[PREVIEW_FRAME_STORE_KEY],
  ...state[CUSTOMISATION_STORE_KEY]
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions,
  loadTheme
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FrameConnector)
