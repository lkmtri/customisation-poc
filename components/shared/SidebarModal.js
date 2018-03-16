import React from 'react'
import styled from 'styled-components'
import Portal from 'components/shared/Portal'

const SidebarModalContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #ccc;
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #999;
  position: relative;
  justify-content: center;
`

const TitleContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`

const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`

class SidebarModal extends React.PureComponent {
  render () {
    const { onClose, title, children } = this.props

    return (
      <Portal>
        <SidebarModalContainer>
          <HeaderContainer>
            <CloseButton onClick={onClose}>{'<'}</CloseButton>
            <TitleContainer>{title}</TitleContainer>
          </HeaderContainer>
          {children}
        </SidebarModalContainer>
      </Portal>
    )
  }
}

export default SidebarModal
