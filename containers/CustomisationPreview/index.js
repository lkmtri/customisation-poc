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
  static getInitialState = () => ({ [STORE_KEY]: initialState })

  static getReducers = () => ({ [STORE_KEY]: reducers })

  componentDidMount () {
    if (window !== undefined) {
      const frame = document.getElementById('preview-frame')
      frame.onload = () => {
        this.props.registerPreviewFrame(frame)
      }
    }
  }

  render () {
    return (
      <Container>
        <Frame id='preview-frame' src='http://localhost:3001' sandbox='allow-forms allow-scripts allow-same-origin allow-popups' />
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(CustomisationPreview)
