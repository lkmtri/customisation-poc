import React from 'react'
import styled from 'styled-components'

const SectionSidebarContainer = styled.div`
  height: 100%;
  overflow: scroll;
`

class SectionSidebar extends React.PureComponent {
  render () {
    console.log(this.props)
    return (
      <SectionSidebarContainer>
        SectionSidebarContainer
      </SectionSidebarContainer>
    )
  }
}

export default SectionSidebar
