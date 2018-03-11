import React from 'react'
import styled from 'styled-components'
import { HeaderText } from 'components/shared/Typo'

const Container = styled.div`
  margin-top: 10px;
  background-color: #999;
  padding: 10px 10px 0 10px;
`

class Header extends React.PureComponent {
  render () {
    return (
      <Container>
        <HeaderText>{this.props.content}</HeaderText>
      </Container>
    )
  }
}

export default Header
