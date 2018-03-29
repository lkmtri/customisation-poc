import React from 'react'
import styled from 'styled-components'
import Portal from 'components/shared/Portal'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const ModalBackdrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255,0,0,0.1);
  position: relative;
`

const ModalContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`

export const ModalHeader = styled.div`
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px #ddd solid;
`

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px;
`

export const ModalFooter = styled.div`
  background-color: #fff;
  padding: 10px;
  border-top: 1px #ddd solid;
`

class Modal extends React.PureComponent {
  closeModal = () => {
    this.props.onClose()
  }

  render () {
    return (
      <Portal>
        <Container onClick={e => e.stopPropagation()}>
          <ModalBackdrop onClick={this.closeModal}>
            <ModalContainer onClick={e => e.stopPropagation()}>
              {this.props.children}
            </ModalContainer>
          </ModalBackdrop>
        </Container>
      </Portal>
    )
  }
}

export default Modal
