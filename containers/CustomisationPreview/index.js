import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reducers } from './reducers'
import * as actions from './actions'
import { STORE_KEY } from './constants'

const previewMode = {
  mobile: 'MOBILE',
  desktop: 'DESKTOP'
}

const Container = styled.div`
  background-color: #ddd;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PreviewActions = styled.div`
  display: flex;
  height: 50px;
  min-height: 50px;
  justify-content: space-between;
  background-color: #888;
`

const PreviewActionGroup = styled.div`
  display: flex;  
  height: 100%;
  padding: 0 10px;
  align-items: center;
`

const PreviewActionItem = styled.div`
  padding: 0 5px;
  cursor: pointer;
`

const FrameContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Frame = styled.iframe`
  height: ${props => props.previewMode === previewMode.desktop ? '100%' : '600px'};
  width: ${props => props.previewMode === previewMode.desktop ? '100%' : '400px'};
  transition: height 200ms ease-in-out, width 200ms ease-in-out;
  border: 1px #888 solid;
`

class CustomisationPreview extends React.PureComponent {
  static defaultProps = {
    frameUrl: 'http://localhost:3001?preview=0'
  }

  static getReducers = () => ({ [STORE_KEY]: reducers })

  state = {
    mode: previewMode.desktop
  }

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

  setPreviewMode = (mode) => () => this.setState({ mode })

  registerPreviewFrame = () => {
    if (window !== undefined) {
      const frame = document.getElementById('preview-frame')
      frame.onload = () => {
        this.props.registerPreviewFrame(frame)
      }
    }
  }

  render () {
    const { frameUrl, currentFrameUrl } = this.props
    const { mode } = this.state

    return (
      <Container>
        <PreviewActions>
          <PreviewActionGroup>
            {currentFrameUrl}
          </PreviewActionGroup>
          <PreviewActionGroup>
            <PreviewActionItem onClick={this.setPreviewMode(previewMode.mobile)}>Mobile</PreviewActionItem>
            <PreviewActionItem onClick={this.setPreviewMode(previewMode.desktop)}>Desktop</PreviewActionItem>
          </PreviewActionGroup>
          <PreviewActionGroup>
            Save
          </PreviewActionGroup>
        </PreviewActions>
        <FrameContainer >
          <Frame id='preview-frame' previewMode={mode} src={frameUrl} sandbox='allow-forms allow-scripts allow-same-origin allow-popups' />
        </FrameContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({ ...state[STORE_KEY] })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomisationPreview)
