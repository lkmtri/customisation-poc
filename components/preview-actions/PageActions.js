import React from 'react'
import styled from 'styled-components'
import Modal, { ModalHeader, ModalContent, ModalFooter } from 'components/shared/Modal'

const Container = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`

const DropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  left: -10px;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const PageItem = styled.div`
  width: 200px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  &:focus {
    outline: none;
  }
`

class PageActions extends React.PureComponent {
  state = {
    showPageDropdown: false,
    showAddNewPageModal: false
  }

  togglePageDropdown = () => this.setState({ showPageDropdown: !this.state.showPageDropdown })

  changePage = (pageName) => () => this.props.changePage(pageName)

  addNewPage = () => {
    const pageName = this._pagenameInput.value
    this.props.addNewPageAction({ pageName })
    this.hideAddNewPageModal()
  }

  openAddNewPageModal = () => this.setState({ showAddNewPageModal: true })

  hideAddNewPageModal = () => this.setState({ showAddNewPageModal: false })

  render () {
    const { currentFrameUrl, pages } = this.props
    const { showPageDropdown, showAddNewPageModal } = this.state
    const pageNames = pages
      ? Object.keys(pages)
      : ['index']

    return (
      <Container onClick={this.togglePageDropdown}>
        {currentFrameUrl}
        {showPageDropdown && (
          <DropdownContainer>
            {pageNames.map((pageName) => (<PageItem onClick={this.changePage(pageName)}>{pageName}</PageItem>))}
            <PageItem onClick={this.openAddNewPageModal}>Add New Page</PageItem>
          </DropdownContainer>
        )}
        {showAddNewPageModal && (
          <Modal onClose={this.hideAddNewPageModal}>
            <ModalHeader>
              Enter Page Name
            </ModalHeader>
            <ModalContent>
              <Input innerRef={e => { this._pagenameInput = e }} />
            </ModalContent>
            <ModalFooter>
              <button onClick={this.addNewPage}>Add</button>
            </ModalFooter>
          </Modal>
        )}
      </Container>
    )
  }
}

export default PageActions
