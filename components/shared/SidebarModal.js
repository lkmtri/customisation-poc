import React from 'react'
import styled from 'styled-components'
import Portal from 'components/shared/Portal'

const SidebarModalContainer = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #ccc;
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #999;
`

const TitleContainer = styled.div`
  height: 50px;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`

const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
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
