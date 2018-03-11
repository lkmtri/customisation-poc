import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initialState, reducers } from './reducers'
import * as actions from './actions'

const STORE_KEY = '@@preview'

const Container = styled.div`
  background-color: #ddd;
  flex: 1;
`

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
`

class CustomisationPreview extends React.PureComponent {
  static defaultProps = {
    frameUrl: 'http://localhost:3001'
  }

  static getInitialState = () => ({ [STORE_KEY]: initialState })

  static getReducers = () => ({ [STORE_KEY]: reducers })

  componentWillReceiveProps (nextProps) {
    if (nextProps.frameUrl !== this.props.frameUrl) {
      this.props.registerPreviewFrame(null)
    }
  }

  componentDidMount () {
    this.registerPreviewFrame()
  }

  componentDidUpdate () {
    this.registerPreviewFrame()
  }

  registerPreviewFrame = () => {
    if (window !== undefined) {
      const frame = document.getElementById('preview-frame')
      frame.onload = () => {
        this.props.registerPreviewFrame(frame)
      }
    }
  }

  render () {
    const { frameUrl } = this.props

    return (
      <Container>
        <Frame id='preview-frame' src={frameUrl} sandbox='allow-forms allow-scripts allow-same-origin allow-popups' />
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(CustomisationPreview)
