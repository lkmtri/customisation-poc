import React from 'react'
import styled from 'styled-components'

const SectionSidebarContainer = styled.div`
  background-color: red;
  height: 100%;
  overflow: scroll;
`

class SectionSidebar extends React.PureComponent {
  render () {
    return (
      <SectionSidebarContainer>
        SectionSidebarContainer
      </SectionSidebarContainer>
    )
  }
}

export default SectionSidebar
