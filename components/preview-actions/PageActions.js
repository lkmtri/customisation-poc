import React from 'react'
import styled from 'styled-components'

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

class PageActions extends React.PureComponent {
  state = {
    showPageDropdown: false
  }

  togglePageDropdown = () => this.setState({ showPageDropdown: !this.state.showPageDropdown })

  changePage = (pageName) => () => this.props.changePage(pageName)

  render () {
    const { currentFrameUrl, pages } = this.props
    const { showPageDropdown } = this.state
    const pageNames = pages
      ? Object.keys(pages)
      : ['index']

    return (
      <Container onClick={this.togglePageDropdown}>
        {currentFrameUrl}
        {showPageDropdown && (
          <DropdownContainer>
            {pageNames.map((pageName) => (<PageItem onClick={this.changePage(pageName)}>{pageName}</PageItem>))}
          </DropdownContainer>
        )}
      </Container>
    )
  }
}

export default PageActions
